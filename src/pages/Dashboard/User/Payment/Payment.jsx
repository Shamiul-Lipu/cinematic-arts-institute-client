import SectionTitle from "../../../../components/Titles/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSelectedClasses from "../../../../hooks/useSelectedClasses";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const stripePromise = loadStripe(`${import.meta.env.VITE_Payment_Gateway_PK}`);

const Payment = () => {
    const { id } = useParams();
    const [axiosSecure] = useAxiosSecure()
    // console.log(id);
    const [selectedClasses, refetch] = useSelectedClasses();
    const [selectedClass, setSelectedClass] = useState(null);
    // Initialize selectedClass with null

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`/selected-class/${id}`);
                const selectedClassData = response.data;
                setSelectedClass(selectedClassData); // Set the selectedClass value
            } catch (error) {
                console.error('Error fetching selected class:', error);
                // Handle the error
            }
        };

        fetchData();
    }, [axiosSecure, id]);

    // selectedClass && console.log(selectedClass.price);

    return (
        <div className="border-[3px] border-indigo-600 my-4 rounded-lg bg-gray-800">
            <SectionTitle textWhite={true} title={'Payment'}></SectionTitle>
            <Elements stripe={stripePromise}>
                <CheckoutForm selectedClass={selectedClass} selectedClasses={selectedClasses} refetch={refetch} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;