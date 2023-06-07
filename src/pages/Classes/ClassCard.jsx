import { FaInfoCircle, FaStar } from "react-icons/fa";
import PrimaryBtn from "../../components/Buttons/PrimaryBtn";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const ClassCard = ({ classData }) => {
    const { user } = useContext(AuthContext);
    const handleSelectClass = (classData) => {
        console.log(classData);
    }
    // TODO : change the disable button label
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