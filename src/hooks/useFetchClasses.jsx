import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchClasses = () => {
    const { data: classes = [], isLoading, error, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}/all-classes`);
            return response.data;
        },
    });

    return { classes, isLoading, error, refetch };
};

export default useFetchClasses;
