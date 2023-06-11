import SectionTitle from "../../../../components/Titles/SectionTitle";
import usePaymentHistory from "../../../../hooks/usePaymentHistory";

const EnrolledClasses = () => {
    const [enrolledPayments] = usePaymentHistory()
    // console.log(enrolledPayments);
    return (
        <section>
            <SectionTitle title={'Enrolled Courses'}></SectionTitle>
            <div className="w-full pb-4">
                <h3 className="text-xl font-semibold text-center">Total <span className="text-indigo-500">Enrolled In {enrolledPayments?.length}</span> Classes</h3>
                <div className="overflow-x-auto h-96 overflow-y-scroll w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="sticky top-0">
                            <tr className="font-bold text-base bg-indigo-100">
                                <th>#</th>
                                <th>Enrolled Classes</th>
                                <th>Isntructor</th>
                                <th>Current Student</th>
                                <th>Available Seats</th>
                                <th>Paid Price</th>
                                <th>Date & TransactionID</th>

                            </tr>
                        </thead>
                        <tbody className="font-semibold ">
                            {
                                enrolledPayments?.map((course, index) => <tr
                                    key={course._id}
                                >
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        {course?.class}
                                    </td>
                                    <td>
                                        {course?.instructor}
                                    </td>
                                    <td>
                                        {course?.numOfStudent}
                                    </td>
                                    <td>
                                        {course?.availableSeats}
                                    </td>
                                    <td className="">$ {course.price}</td>

                                    <td>
                                        <p className="flex justify-center items-center rounded-lg hover:bg-orange-300 transition px-4 font-semibold py-3 bg-orange-100 text-red-900"> {course.date}</p>
                                        <p className=" my-1 flex justify-center items-center rounded-lg hover:bg-green-300 transition px-4 font-semibold py-3 bg-green-100 text-green-900"> {course.transactionId}</p>
                                    </td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default EnrolledClasses;