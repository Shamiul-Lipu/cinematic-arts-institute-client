import SectionTitle from "../../../../components/Titles/SectionTitle";
import usePaymentHistory from "../../../../hooks/usePaymentHistory";

const PaymentHistory = () => {
    const [enrolledPayments] = usePaymentHistory()
    // console.log(enrolledPayments);
    return (
        <section>
            <SectionTitle title={'Payment History'}></SectionTitle>
            <div className="w-full py-4">
                <div className="uppercase font-semibold  flex justify-evenly items-center ">
                    <h3 className="text-3xl">Payment Done: {enrolledPayments?.length}</h3>
                </div>
                <div className="overflow-x-auto h-96 overflow-y-scroll w-full">
                    <table className="table w-full">
                        {/* head */}
                        <thead className="sticky top-0">
                            <tr className="font-bold text-base bg-indigo-100">
                                <th>#</th>
                                <th>Enrolled Classes</th>
                                <th>Paid Price</th>
                                <th>Date</th>
                                <th>TransactionID</th>

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

                                    <td className="">$ {course.price}</td>

                                    <td>
                                        <p className="flex justify-center items-center rounded-lg hover:bg-orange-300 transition px-4 font-semibold py-3 bg-orange-100 text-red-900"> {course.date}</p>

                                    </td>
                                    <td>

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

export default PaymentHistory;