import { FaStar } from "react-icons/fa";

const InstructorCard = ({ instructor }) => {
    // console.log(instructor);
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={instructor.instructorImg} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {instructor.class}</h2>
                <p className="flex justify-start items-center"><span className="text-yellow-400"><FaStar /></span> <span className="text-xs">{instructor.classRating} out of 5 </span></p>
                <p className="font-semibold text-base">Instructor: {instructor.instructor}</p>
            </div>
        </div>
    );
};

export default InstructorCard;