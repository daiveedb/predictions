"use client";

import { Listbox } from "@headlessui/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BankEntity, useGetBanks } from "@/api/getBanks";
import UssdMessage from "./UssdMessage";
import DownArrow from "@/app/icons/DownArrow";

interface UssdComponentProps {
  phoneNumber: string;
  amount: number;
}
export interface ussdInputType {
  amount: string;
  phone_number: string;
  bank_code?: string | undefined;
}

const UssdComponent: React.FunctionComponent<UssdComponentProps> = ({
  phoneNumber,
  amount,
}) => {
  const { data: banksList } = useGetBanks();

  const [selectedBank, setSelectedBank] = useState<BankEntity | null>();

  const [ussdInput, setUssdInput] = useState<ussdInputType>({
    amount: amount.toString(),
    phone_number: phoneNumber,
    bank_code: selectedBank?.bank_code,
  });

  useEffect(() => {
    setUssdInput({
      amount: amount.toString(),
      phone_number: phoneNumber,
      bank_code: selectedBank?.bank_code,
    });
  }, [selectedBank]);

  return (
    <div>
      <Listbox value={selectedBank} onChange={setSelectedBank}>
        <Listbox.Button
          className={
            "relative flex w-full items-center justify-between rounded-md bg-[#F5F3FF4D] p-3 text-left text-sm text-gray-200 outline-none"
          }
        >
          <p>{selectedBank ? `${selectedBank.name}` : "Select Bank"}</p>
          <div className="right-0 inset-y-0 w-[50px] absolute rounded-md bg-white flex justify-center items-center">
            <DownArrow />
          </div>
        </Listbox.Button>
        <Listbox.Options
          className={
            "absolute left-1/2 z-10 h-[300px] w-[80%] translate-x-[-50%] overflow-y-scroll rounded-md bg-[#0E1746] p-5 outline-none"
          }
        >
          {banksList?.map((bank: BankEntity) => (
            <Listbox.Option key={bank.bank_code} value={bank}>
              {({ active }) => (
                <div
                  className={`${
                    active
                      ? "rounded bg-[#F5F3FF4D] p-2 text-white"
                      : "rounded bg-transparent p-2 text-white"
                  }`}
                >
                  <p>{bank.name}</p>
                </div>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
      <div className="pt-3">
        {ussdInput.bank_code ? (
          <UssdMessage ussdInput={ussdInput || ""} />
        ) : (
          <div className="flex h-11 w-full items-center justify-center rounded-md border border-white"></div>
        )}
      </div>
    </div>
  );
};

export default UssdComponent;
