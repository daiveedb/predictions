
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const getUpcomingMatches = async() => {
    const response = await axios.get('https://dev.whisperwyse.com/sport_lotto/upcoming_match/')
    return response.data
}

export const useGetUpcomingMatches = () => {
    return useQuery({
        queryKey: ['upcomingMatchesData'],
        queryFn: getUpcomingMatches
    })
}