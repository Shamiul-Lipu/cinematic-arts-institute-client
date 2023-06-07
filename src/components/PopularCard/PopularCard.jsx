import { FaStar } from "react-icons/fa";

const PopularCard = ({ image, title, instructor, course, rating, instructorDetails, email, classes, classesTaken }) => {
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
                {/* for Instructors page , instructor card  */}
                {
                    instructorDetails && <>
                        <p className="font-semibold text-base">{email}</p>
                        <p className="font-semibold text-base">Currently taking {classesTaken} class</p>
                        <ul>
                            {classes.map(course => <li key={course}>{course}</li>)}
                        </ul>
                    </>
                }
            </div>
        </div>
    );
};

export default PopularCard;