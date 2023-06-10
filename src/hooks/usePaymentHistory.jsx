import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';

const usePaymentHistory = () => {
    const { user, loading } = useContext(AuthContext);

    const { refetch, data: enrolledPayments = [] } = useQuery({
        queryKey: ['selected-classes', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axios(`${import.meta.env.VITE_API_URL}/users-enrolled?email=${user?.email}`)
            // console.log('res from u axios', res)
            return res.data;
        },
    })

    return [enrolledPayments, refetch]

}
export default usePaymentHistory;