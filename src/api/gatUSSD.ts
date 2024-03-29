import { useQuery } from "@tanstack/react-query";
import axios from "axios";
// import { ussdInputType } from '@/types/ussdInputTypes';
const BASE_URL = process.env.BASE_URL;
export interface UssdEntity {
  ussd_code: string;
}
export interface ussdInputType {
  amount: string;
  phone_number: string;
  bank_code?: string | undefined;
}

export const getUssd = async (data: ussdInputType): Promise<UssdEntity> => {
  const response = await axios.post(
    `${BASE_URL}api/v1/ussd_web/generate_ussd_payment_code/`,
    data
  );
  return response.data;
};

export const useUssdCode = (data: ussdInputType) => {
  return useQuery({
    queryKey: ["ussd-codes", data],
    queryFn: () => getUssd(data),
    retry: 1,
  });
};
