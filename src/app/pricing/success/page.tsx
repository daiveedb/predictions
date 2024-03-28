"use client";
import { useGetSubscriptions } from "@/api/getSubscriptions";
import PhoneInput from "@/components/Pricing/PhoneInput";
import PricingPackPanel from "@/components/Pricing/PricingPackPanel";
import { predictionPacks } from "@/dummydata";
import cn from "@/utils/classNames";
import { Dialog, RadioGroup, Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CloseModalIcon from "@/app/icons/CloseModalIcon";
import ReactLoader from "react-loading";
import { phoneStoreProps, usePhoneDetails } from "@/store/phoneStore";
import { useSearchParams } from "next/navigation";
import UssdComponent from "@/components/Pricing/UssdComponent";
import {
  TransferDetailsStoreProps,
  useTransferDetails,
} from "@/store/transferDetailsStore";
import PaystackIcon from "@/app/icons/PaystackIcon";
import { useGetPaystack } from "@/api/generatePaystack";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import SuccessIcon from "@/app/icons/SuccessIcon";

const Page = () => {
  const search = useSearchParams();
  const pickId = search.get("id");
  const pickPrice = search.get("price");
  const pickName = search.get("name");
  const router = useRouter();

  const closeModal = () => {
    router.push("/");
  };
  return (
    <Dialog
      open={true}
      onClose={() => {
        closeModal();
      }}
    >
      <Toaster position="top-center" />
      <div className="fixed inset-0 z-40 bg-[#000000cc]">
        <Dialog.Panel
          className={
            "absolute left-1/2 top-1/2 flex min-h-max font-wix md:min-h-[300px] text-white h-max w-[90%] sm:w-[30rem] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-[#0E1746]"
          }
        >
          <div onClick={closeModal} className="absolute top-8 right-8">
            <CloseModalIcon />
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center p-10">
            <div>
              <SuccessIcon />
            </div>
            <p className="pt-2 text-3xl font-medium">Subscription Successful</p>
            <p className="text-sm text-center ">
              You have successfully subscribed to the{" "}
              <span className="font-bold">Mega boom weekly pack</span>.
            </p>
            <button className="w-full bg-[#FFB800] p-3 outline-none my-4 rounded-md text-black">
              View Predictions
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Page;
