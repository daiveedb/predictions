import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface TransferDetailsStoreProps {
  data: {
    account_name: string;
    account_number: string;
    bank_name: string;
  };
  setTransferDetailsDetails: (payload: {
    account_name: string;
    account_number: string;
    bank_name: string;
  }) => void;
}

export const useTransferDetails: any = create<TransferDetailsStoreProps>()(
  persist(
    (set) => ({
      data: {
        account_name: "",
        account_number: "",
        bank_name: "",
      },
      setTransferDetailsDetails(payload) {
        set((state) => ({ data: payload }));
      },
    }),
    {
      name: "transferDetails",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
