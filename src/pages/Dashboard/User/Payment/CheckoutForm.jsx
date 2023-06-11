import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";
import './CheckoutForm.css';
import axios from "axios";



const CheckoutForm = ({ selectedClass, selectedClasses, refetch }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    const [errorMassge, setErrorMassge] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [willUpdateClass, setWillUpdateClass] = useState(null)

    // console.log(classes);

    const price = selectedClass && selectedClass.price
    const selectedClassID = selectedClass && selectedClass._id

    // selectedClass && console.log(selectedClass._id);
    useEffect(() => {
        if (selectedClass && selectedClass.selectedClassID) {
            // console.log(selectedClass._id);
            axios.get(`${import.meta.env.VITE_API_URL}/all-classes/${selectedClass.selectedClassID}`)
                .then(res => {
                    // console.log("Response:", res.data);
                    // setWillUpdateClass(res.data);
                })
                .catch(error => {
                    console.log('Error fetching data:', error);
                });
        }

    }, [selectedClass]);

    // console.log("will 43", willUpdateClass?.availableSeats, willUpdateClass?.numOfStudent);

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('error', error)
            setErrorMassge(error.message);
        }
        else {
            setErrorMassge('');
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            // console.log(confirmError);
        }

        // console.log('payment intent', paymentIntent)

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                selectedClassID: selectedClass.selectedClassID,
                status: 'enrolled',
                class: selectedClass.class,
                instructor: selectedClass.instructor,
                numOfStudent: selectedClass.numOfStudent + 1,
                availableSeats: selectedClass.availableSeats - 1,
            }
            axiosSecure.post(`/payments/${selectedClassID}`, payment)
                .then(res => {
                    // console.log(res.data);
                    if (res.data) {
                        // display confirm
                        // console.log("paid id", selectedClass.selectedClassID);
                        // Updating class seats of all classes
                        const updateClassStatus = (id) => {
                            axios.get(`${import.meta.env.VITE_API_URL}/all-classes/${id}`)
                                .then(response => {
                                    const classData = response.data;
                                    if (classData) {
                                        const updatedData = {
                                            availableSeats: classData?.availableSeats - 1,
                                            numOfStudent: classData?.numOfStudent + 1
                                        };

                                        axios.patch(`${import.meta.env.VITE_API_URL}/update-class-seats/${id}`, updatedData)
                                            .then(response => {
                                                // console.log(response.data); // Handle the response data as needed
                                            })
                                            .catch(error => {
                                                console.error('Error updating class status:', error);
                                                // Handle the error
                                            });
                                        // console.log("update 139", updatedData);
                                    }
                                })
                                .catch(error => {
                                    console.error('Error fetching class data:', error);
                                    // Handle the error
                                });
                        };

                        updateClassStatus(selectedClass.selectedClassID);

                    }
                })
        }
    }

    return (
        <>
            <form className="w-2/3 m-8" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className=" mt-4 bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white px-5 py-1 rounded-md py font-bold hover:text-indigo-950" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {errorMassge && <span className='text-red-600 font-semibold  ml-8 mb-2 bg-red-100 px-2 rounded-md'>{errorMassge}</span>}
            {transactionId && <p className="text-green-500 font-semibold  ml-8 mb-2 bg-green-100 px-2 rounded-md">Transaction complete with transactionId: {transactionId}</p>}
        </>
    );
};

export default CheckoutForm;