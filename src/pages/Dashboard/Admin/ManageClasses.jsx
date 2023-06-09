import { useQuery } from "@tanstack/react-query";
import SubSectionTitle from "../../../components/Titles/SubSectionTitle";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import NewClassCard from "./NewClassCard";

const ManageClasses = () => {
    const { loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: classStatus = [], refetch } = useQuery({
        queryKey: [''],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/manage-class-status`);
            return res.data;
        }
    })

    console.log(classStatus)
    return (
        <section>
            <SubSectionTitle title={'Manage Classes'}></SubSectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-1">
                {
                    classStatus && classStatus.map((course, i) => <NewClassCard key={i} refetch={refetch} course={course}></NewClassCard>)
                }
            </div>
        </section>
    );
};

export default ManageClasses;