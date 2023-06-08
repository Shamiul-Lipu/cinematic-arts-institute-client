import { FaInfoCircle, FaStar } from "react-icons/fa";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useSelectedClasses from "../../hooks/useSelectedClasses";

const ClassCard = ({ classData }) => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useSelectedClasses();
    const navigate = useNavigate()

    const handleSelectClass = (classData) => {
        if (user && user.email) {
            // console.log(classData);
            const selectedClass = {
                selectedClassID: classData._id,
                availableSeats: classData.availableSeats,
                numOfStudent: classData.numOfStudent,
                price: classData.price,
                email: user.email,
                class: classData.class,
                instructor: classData.instructor,
                imgUrl: classData.imgUrl,
            }
            axios.post(`${import.meta.env.VITE_API_URL}/selected-classes`, selectedClass)
                .then(res => {
                    // console.log(res.data)
                    if (res.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `Your Selection ${classData.class} done`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
                .catch(error => console.error('Error from ClassCard Post:', error));
        }
        else {
            Swal.fire({
                title: 'Please login to select your classes!',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    // TODO : change the disable button label
    // TODO : use single file for all api

    return (
        <div className={`card card-compact ${classData && classData.availableSeats <= 0 ? 'bg-red-200' : 'bg-indigo-100'}  shadow-xl`}>
            {
                classData && classData.availableSeats <= 0 && (<div className="badge badge-error gap-2 h-7 rounded-xl text-white text-lg">
                    <FaInfoCircle className="text-red-800"></FaInfoCircle>
                    Fully booked
                </div>)
            }
            <figure><img src={classData.imgUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {classData.class}</h2>
                <p className="flex justify-start items-center"><span className="text-yellow-400"><FaStar /></span> <span className="text-xs">{classData.classRating} out of 5 </span></p>
                <p className="font-semibold text-base">Instructor: {classData.instructor}</p>
                <p className="font-semibold text-base">Available Seats: {classData.availableSeats}</p>
                <p className="font-semibold text-base">Price: {classData.price}$</p>
                <p className="font-semibold text-base">{classData?.details.slice(0, 150)}<span className="text-xs text-blue-500">...see more</span></p>
                <div>
                    <PrimaryBtn
                        onClick={() => handleSelectClass(classData)}
                        label={'Select Class'}
                        disabled={classData && classData.availableSeats <= 0 ? true : false}
                    ></PrimaryBtn>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;