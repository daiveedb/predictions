import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export interface BankEntity {
  bank_code: string;
  cbn_code?: string;
  name: string;
  bank_short_name?: string;
  logo: string;
}

export const getBanks = async (): Promise<Array<BankEntity>> => {
  const response = await axios.get(
    `https://libertydraw.com/api/v1/ussd_web/fetch_bank_details/`
  );
  return response.data;
};

export const useGetBanks = () => {
  return useQuery({
    queryKey: ['all-banks'],
    queryFn: () => getBanks(),
  });
};