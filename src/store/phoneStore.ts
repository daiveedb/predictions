import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface phoneStoreProps {
  data: string;
  setPhoneDetails: (payload: string) => void;
}

export const usePhoneDetails: any = create<phoneStoreProps>()(
  persist(
    (set) => ({
      data: "",
      setPhoneDetails(payload) {
        set((state) => ({ data: payload }));
      },
    }),
    {
      name: "phone-details",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
