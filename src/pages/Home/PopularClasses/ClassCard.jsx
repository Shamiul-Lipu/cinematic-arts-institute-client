import { FaStar } from "react-icons/fa";

const ClassCard = ({ classData }) => {
    // console.log(classData);
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={classData.imgUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {classData.class}</h2>
                <p className="flex justify-start items-center"><span className="text-yellow-400"><FaStar /></span> <span className="text-xs">{classData.classRating} out of 5 </span></p>
                <p className="font-semibold text-base">Instructor: {classData.instructor}</p>
            </div>
        </div>
    );
};

export default ClassCard;