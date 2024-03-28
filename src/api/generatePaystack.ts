import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { ussdInputType } from '@/types/ussdInputTypes';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export const getPaystackLink = async (data: {
  phone_number: string;
  amount: number;
}) => {
  const response = await axios.post(
    `${BASE_URL}api/v1/ussd_web/soccer_prediction/pay_prediction_subscription/`,
    data
  );
  return response.data;
};

export const useGetPaystack = () => {
  return useMutation({
    mutationKey: ["ussd-codes"],
    mutationFn: getPaystackLink,
    retry: 1,
  });
};
