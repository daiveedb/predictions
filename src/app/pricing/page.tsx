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
import { useBuyTicket } from "@/api/buyTicket";
import {
  TransferDetailsStoreProps,
  useTransferDetails,
} from "@/store/transferDetailsStore";

const Page = () => {
  const router = useRouter();
  const { data: subscriptionData, isLoading: loading } = useGetSubscriptions();
  const { mutate: buyTicket, isPending: buyLoading } = useBuyTicket();
  const closeModal = () => {
    router.push("/");
  };
  const phoneNumber = usePhoneDetails((state: phoneStoreProps) => state.data);
  const setPhoneNumber = usePhoneDetails(
    (state: phoneStoreProps) => state.setPhoneDetails
  );
  const setTransferDetails = useTransferDetails(
    (state: TransferDetailsStoreProps) => state.setTransferDetailsDetails
  );
  const [selectedSubsciption, setSelectedSubscription] = useState<{
    id: number;
    subscription_name: string;
    subscription_amount: number;
    subscription_duration: number;
    duration_of_subscription_type: string;
  }>();
  const [error, setError] = useState("");

  const handleSelect = () => {
    if ((phoneNumber as string).length < 11) {
      setError("Enter a valid phone number");
    } else {
      buyTicket(
        {
          phone_number: phoneNumber,
          amount: selectedSubsciption?.subscription_amount as number,
          consent: true,
          subscription_id: selectedSubsciption?.id as number,
        },
        {
          onSuccess: (data) => {
            console.log(data);
            setTransferDetails({
              ...data.payment_details,
            });
            router.push(
              `/payment/?id=${selectedSubsciption?.id}&price=${selectedSubsciption?.subscription_amount}&name=${selectedSubsciption?.subscription_name}`
            );
          },
        }
      );
    }
  };

  useEffect(() => {
    if (subscriptionData) {
      setSelectedSubscription(subscriptionData?.data[0]);
    }
  }, [subscriptionData]);

  useEffect(() => {
    if (phoneNumber?.length === 11) {
      setError("");
    }
  }, [phoneNumber]);
  return (
    <Dialog open={true} onClose={() => {}}>
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
            <p className="text-2xl font-semibold font-">
              Select Prediction Options
            </p>
            <p className="text-xs text-[#DDDDDD] w-[90%]">
              Select your preferred subscription plan option for highly rated
              predictions{" "}
            </p>
            <input
              className={cn(
                "w-full rounded-md bg-[#FFFFFF33] mt-6 p-4 text-sm outline-none",
                { "border border-red-400": error }
              )}
              maxLength={12}
              minLength={11}
              placeholder="Your phone number"
              type="number"
              value={phoneNumber}
              required
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
            <p className="text-sm mt-4 py-1 font-light">
              Select subscription plan
            </p>
            <div className="py-5 pt-0 flex justify-center items-center">
              {loading ? (
                <div className="py-10">
                  <ReactLoader
                    type="spin"
                    color="#FFB800"
                    height={50}
                    width={50}
                  />
                </div>
              ) : (
                <RadioGroup
                  value={selectedSubsciption}
                  onChange={setSelectedSubscription}
                  className={"grid grid-cols-1 gap-2 w-full"}
                >
                  {subscriptionData?.data.map(
                    (item: {
                      id: number;
                      subscription_name: string;
                      subscription_amount: number;
                      subscription_duration: number;
                      duration_of_subscription_type: string;
                    }) => {
                      return (
                        <RadioGroup.Option key={item.id} value={item}>
                          {({ checked }) => (
                            <div
                              className={cn(
                                "w-full bg-[#FFFFFF33] rounded-md p-3 flex items-center gap-x-7 relative"
                              )}
                            >
                              <div
                                className={cn(
                                  " w-5 h-5 border-2 border-white rounded-full",
                                  { "bg-[#FFB800]": checked }
                                )}
                              ></div>
                              <p className="capitalize">
                                {item.subscription_name}
                              </p>
                              <div className="absolute inset-y-0 right-0 text-black w-[100px] font-semibold text-sm bg-white rounded-md flex justify-center items-center">
                                ₦{item?.subscription_amount}
                              </div>
                            </div>
                          )}
                        </RadioGroup.Option>
                      );
                    }
                  )}
                </RadioGroup>
              )}
            </div>
            <button
              className="w-full bg-[#FFB800] rounded-md p-3 flex justify-center items-center outline-none text-black my-4 disabled:bg-[#FFB80066]"
              disabled={!phoneNumber}
              onClick={() => handleSelect()}
            >
              {buyLoading ? (
                <ReactLoader type="spin" color="black" height={20} width={20} />
              ) : (
                <p>Subscribe</p>
              )}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Page;