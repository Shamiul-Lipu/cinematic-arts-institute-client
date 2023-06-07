import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useFetchClasses = () => {
    const { data: classes = [], isLoading, error, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const response = await axios.get("http://localhost:5000/all-classes");
            return response.data;
        },
    });

    return { classes, isLoading, error, refetch };
};

export default useFetchClasses;
