import { FaStar, FaUserGraduate, FaUserFriends } from "react-icons/fa";

const PopularCard = ({ image, title, instructor, course, rating, instructorDetails, email, classes, classesTaken, status, numOfStudent, currentStudent, bgTrue }) => {
    return (
        <div className={`card card-compact bg-base-100 shadow-xl ${status && status === "pending" ? 'hidden' : ''} ${bgTrue && bgTrue ? 'bg-slate-800 text-lime-50' : ''}`}>
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {title}</h2>
                {
                    rating && <p className="flex justify-start items-center gap-1">

                        <span className="text-yellow-400"><FaStar /></span>
                        <span className="text-xs"> {rating} out of 5 </span>
                    </p>
                }
                {
                    numOfStudent && <p className="text-xs font-semibold flex items-center gap-1"><FaUserGraduate /> Enrolled: {numOfStudent} student</p>
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
                            {classes && classes.map(course => <li key={course}>{course}</li>)}
                        </ul>
                    </>
                }

                {
                    currentStudent && <p className="text-xs font-semibold flex items-center gap-1 text-lime-200"><FaUserFriends /> Current student: {currentStudent}</p>
                }
            </div>
        </div>
    );
};

export default PopularCard;