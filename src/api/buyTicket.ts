import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const buyTicket = async (data: {
  phone_number: string;
  subscription_id: number;
  consent: boolean;
  amount: number;
}) => {
  const response = await axios.post(
    `${BASE_URL}api/v1/ussd_web/soccer_prediction/prediction_odds/`,
    data
  );
  return response.data;
};

export const useBuyTicket = () => {
  return useMutation({
    mutationFn: buyTicket,
    mutationKey: ["buy-ticket"],
  });
};
