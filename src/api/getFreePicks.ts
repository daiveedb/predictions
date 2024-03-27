import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const getFreePicks = async () => {
  const response = await axios.get(
    "https://dev.whisperwyse.com/sport_lotto/web_soccer_prediction/?link_id=324f245Z"
  );
  return response.data;
};

export const useGetFreePicks = () => {
  return useQuery({
    queryKey: ["freePicksData"],
    queryFn: getFreePicks,
  });
};
