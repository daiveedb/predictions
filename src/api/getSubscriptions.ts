import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const getSubscriptions = async() => {
    const response = await axios.get('https://dev.whisperwyse.com/sport_lotto/prediction_type/')
    return response.data
}

export const useGetSubscriptions = () => {
    return useQuery({
        queryKey: ['subscriptionsData'],
        queryFn: getSubscriptions
    })
}