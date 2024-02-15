"use client";
import { phoneStoreProps, usePhoneDetails } from "@/store/phoneStore";
import React from "react";

const PhoneInput = () => {
  const phoneNumber = usePhoneDetails((state: phoneStoreProps) => state.data);
  const setPhoneNumber = usePhoneDetails(
    (state: phoneStoreProps) => state.setPhoneDetails
  );

  return (
    <input
      type="text"
      className="p-3 bg-[#FFFFFF33] w-full rounded-md text-white placeholder:text-white outline-none"
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
  );
};

export default PhoneInput;
