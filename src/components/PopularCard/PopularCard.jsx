import { FaStar } from "react-icons/fa";

const PopularCard = ({ image, title, instructor, course, rating }) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {title}</h2>
                {
                    rating && <p className="flex justify-start items-center">

                        <span className="text-yellow-400"><FaStar /></span>
                        <span className="text-xs"> {rating} out of 5 </span>
                    </p>
                }
                {
                    instructor && <p className="font-semibold text-base">Instructor: {course}</p>
                }
            </div>
        </div>
    );
};

export default PopularCard;