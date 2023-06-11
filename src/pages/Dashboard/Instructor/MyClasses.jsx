import { useQuery } from "@tanstack/react-query";
import SubSectionTitle from "../../../components/Titles/SubSectionTitle";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import SectionTitle from "../../../components/Titles/SectionTitle";

const MyClasses = () => {
    const { user, loading } = useAuth();

    const { refetch, data: myClasses = [] } = useQuery({
        queryKey: ['my-inserted-classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/my-inserted-classes?email=${user?.email}`)
            // console.log('res from useSelectedClasses axios', res)
            return res.data;
        },
    })

    // console.log(myClasses);

    return (
        <section className="py-3">
            <SectionTitle titleShort={'Your Added Classes, Status & Updates'}></SectionTitle>
            {
                myClasses && myClasses.length <= 0 ? <h3>No class added Yet!</h3> : ''
            }
            <div >
                {
                    myClasses && myClasses.map((course, i) => <div key={i} className="card w-[500px] my-5 bg-base-100 shadow-xl">
                        <div className="card-body pb-0">
                            <h2 className="card-title">{course.class}</h2>
                            <p>Enrolled Student: {course?.numOfStudent}</p>
                            <p>Available Seats: {course?.availableSeats}</p>
                        </div>
                        <div className="py-2 px-8">
                            <div className="py-2 flex justify-between items-center font-semibold">
                                <p className="">Class Status:</p>
                                <p className={`${course?.classStatus === 'pending' ? 'bg-blue-200 border-[2px] border-blue-600' : 'bg-slate-400'} py-1 px-4 rounded-md w-1/4 text-center`}>Pending</p>
                                <p className={`${course?.classStatus === 'approved' ? 'bg-green-200 border-green-600' : 'bg-slate-400'} py-1 px-4 rounded-md w-1/4 text-center`}>Approved</p>
                                <p className={`${course?.classStatus === 'denied' ? 'bg-red-200 border-red-600' : 'bg-slate-400'} py-1 px-4 rounded-md w-1/4 text-center`}>Denied </p>
                            </div>
                            {
                                course?.feedback?.length > 0 ? <p className="text-indigo-700 font-semibold">{course?.feedback}</p> : <p className="text-xs">No Feedback Yet!</p>

                            }
                            <button className="font-semibold my-2 py-2 px-4 rounded-md shadow-2xl flex justify-center items-center gap-2 text-center hover:opacity-90 bg-indigo-500 mr-1 text-white">Update</button>
                        </div>
                    </div>)
                }
            </div>
        </section>
    );
};

export default MyClasses;