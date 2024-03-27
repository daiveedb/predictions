"use client";
import { useGetSubscriptions } from "@/api/getSubscriptions";
import PhoneInput from "@/components/Pricing/PhoneInput";
import PricingPackPanel from "@/components/Pricing/PricingPackPanel";
import { predictionPacks } from "@/dummydata";
import cn from "@/utils/classNames";
import { Dialog, RadioGroup, Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CloseModalIcon from "../icons/CloseModalIcon";
import ReactLoader from "react-loading";
import { phoneStoreProps, usePhoneDetails } from "@/store/phoneStore";
import { useSearchParams } from "next/navigation";
import UssdComponent from "@/components/Pricing/UssdComponent";
import {
  TransferDetailsStoreProps,
  useTransferDetails,
} from "@/store/transferDetailsStore";
import PaystackIcon from "../icons/PaystackIcon";
import { useGetPaystack } from "@/api/generatePaystack";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const Page = () => {
  const search = useSearchParams();
  const pickId = search.get("id");
  const pickPrice = search.get("price");
  const pickName = search.get("name");
  const router = useRouter();

  const { mutate: generatePaystack, isPending: paystackLoading } =
    useGetPaystack();
  const transferDetails = useTransferDetails(
    (state: TransferDetailsStoreProps) => state.data
  );
  const closeModal = () => {
    router.push("/pricing");
  };
  const phoneNumber = usePhoneDetails((state: phoneStoreProps) => state.data);

  useEffect(() => {
    if (!(pickId && pickPrice && pickName)) {
      router.push("/pricing");
    }
  }, []);

  const handlePaystack = () => {
    generatePaystack(
      {
        phone_number: phoneNumber,
        amount: parseInt(pickPrice as string),
      },
      {
        onSuccess: ({ payment_link }) => {
          router.push(payment_link);
        },
        onError: () => {
          toast.error("Something went wrong");
        },
      }
    );
  };
  return (
    <Dialog open={true} onClose={() => {}}>
      <Toaster position="top-center" />
      <div className="fixed inset-0 z-40 bg-[#000000cc]">
        <Dialog.Panel
          className={
            "absolute left-1/2 top-1/2 flex min-h-max font-wix md:min-h-[600px] text-white h-max w-[30rem] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-[#0E1746]"
          }
        >
          <div onClick={closeModal} className="absolute top-8 right-8">
            <CloseModalIcon />
          </div>
          <div className="p-8">
            <p className="text-2xl font-semibold font-">Make Payment</p>
            <p className="font-light mt-4">
              Subscription number:{" "}
              <span className="font-semibold">{phoneNumber}</span>
            </p>
            <div
              className={cn(
                "w-full bg-[#FFFFFF33] rounded-md p-3 flex mt-1 mb-4 items-center gap-x-7 relative"
              )}
            >
              <div
                className={cn(
                  " w-5 h-5 border-2 border-white rounded-full p-[1px]"
                )}
              >
                <div className="bg-white w-full h-full rounded-full"></div>
              </div>
              <p className="capitalize">{pickName}</p>
              <div className="absolute inset-y-0 right-0 text-black w-[100px] font-semibold text-sm bg-white rounded-md flex justify-center items-center">
                ₦{pickPrice}
              </div>
            </div>

            <p className="text-sm font-light py-1">
              Select your preferred bank and confirm, dial USSD code and make
              payment.
            </p>
            <UssdComponent
              phoneNumber={phoneNumber}
              amount={parseInt(pickPrice as string)}
            />
            {transferDetails?.account_name &&
              transferDetails.account_number &&
              transferDetails.bank_name && (
                <div className="#F5F3FF33 p-3">
                  <p className="py-2">Subscribe with transfer</p>
                  <hr />
                  <div className="w-full grid grid-cols-2">
                    <div>
                      <p className="font-light text-sm">Account Name</p>
                      <p className="text-sm font-semibold">
                        {transferDetails.account_name}
                      </p>
                      <p className="font-light text-sm">Account No</p>
                      <p className="text-sm font-semibold">
                        {transferDetails.account_number}
                      </p>
                      <p className="font-light text-sm">Bank Name</p>
                      <p className="text-sm font-semibold">
                        {transferDetails.bank_name}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            <div className="pt-10">
              <button
                onClick={handlePaystack}
                className="w-full bg-white flex justify-center gap-x-2 items-center outline-none rounded-md p-3 text-black my-4 mb-2 disabled:bg-[#FFB80066]"
              >
                {paystackLoading ? (
                  <ReactLoader
                    type="spin"
                    color="black"
                    height={20}
                    width={20}
                  />
                ) : (
                  <>
                    <PaystackIcon />
                    <p>Pay with paystack</p>
                  </>
                )}
              </button>
              <button className="w-full bg-[#FFB800] outline-none rounded-md p-3 text-black my-4 mt-0 disabled:bg-[#FFB80066]">
                Confirm Payment
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Page;
