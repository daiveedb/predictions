"use client";
import { useGetSubscriptions } from "@/api/getSubscriptions";
import PhoneInput from "@/components/Pricing/PhoneInput";
import PricingPackPanel from "@/components/Pricing/PricingPackPanel";
import { predictionPacks } from "@/dummydata";
import cn from "@/utils/classNames";
import { Dialog, Menu, Popover, RadioGroup, Tab } from "@headlessui/react";
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
import DownArrow from "../icons/DownArrow";
import GameDropDown from "@/components/Pricing/GameDropDown";

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
  const [error, setError] = useState("");
  const [selectedSubsciption, setSelectedSubscription] = useState<{
    id: number;
    subscription_name: string;
    subscription_amount: number;
    subscription_duration: number;
    duration_of_subscription_type: string;
  }>();
  const tablist = ["Weekly", "Monthly"];

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
          onError: (err: any) => {
            console.log(err);

            setTopError(
              err?.response?.data?.phone_number[0] ||
                err?.response?.data?.subscription_id[0] ||
                "Something went wrong"
            );
          },
        }
      );
    }
  };

  const [topError, setTopError] = useState("");

  useEffect(() => {
    if (subscriptionData) {
      setSelectedSubscription(subscriptionData?.data[0]);
    }
  }, [subscriptionData]);

  useEffect(() => {
    if (phoneNumber?.length === 11) {
      setTopError("");
    }
  }, [phoneNumber]);
  return (
    <Dialog open={true} onClose={() => {}}>
      <div className="fixed inset-0 z-40 bg-[#000000cc]">
        <Dialog.Panel
          className={
            "absolute left-1/2 top-1/2 flex min-h-max font-wix md:min-h-[600px] text-white h-max w-[90%] sm:w-[30rem] -translate-x-1/2 -translate-y-1/2 flex-col rounded-2xl bg-[#0E1746]"
          }
        >
          <div
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-8 sm:right-8"
          >
            <CloseModalIcon />
          </div>
          {topError && (
            <div className="absolute top-0 text-center text-black left-0 w-full bg-red-500 text-xs rounded-t-md py-1 px-5 sm:px-8">
              {topError}
              <button
                onClick={() => setTopError("")}
                className="absolute right-2 text-black top-0 h-full flex justify-center items-center font-bold"
              >
                X
              </button>
            </div>
          )}
          <div className="p-5 sm:p-8">
            <p className="text-xl sm:text-2xl font-semibold font-">
              Select Prediction Options
            </p>
            <p className="text-xs pricing-description text-[#DDDDDD] w-[90%]">
              Select your preferred subscription plan option for highly rated
              predictions{" "}
            </p>
            <input
              className={cn(
                "w-full rounded-md bg-[#FFFFFF33] mt-4 sm:mt-6 p-4 text-sm outline-none",
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
            <p className="text-xs sm:text-sm mt-4 flex items-center gap-x-2 py-1 font-light">
              Select subscription plan. click the{" "}
              <span className="inline bg-white rounded p-1">
                <DownArrow color="white" />
              </span>{" "}
              to learn more
            </p>

            <Tab.Group>
              <Tab.List
                className={cn(
                  "flex my-3 justify-between rounded-md bg-[#FFFFFF1A]"
                )}
              >
                {tablist.map((item: string, index: number) => {
                  return (
                    <Tab key={index} className={"outline-none w-full"}>
                      {({ selected }) => (
                        <div
                          className={cn(
                            "p-2 w-full flex-1 px-5 rounded-md outline-none",
                            {
                              "bg-white text-main_darker_blue ": selected,
                            }
                          )}
                        >
                          <p className="text-sm">
                            {item}{" "}
                            <span className="hidden sm:inline">
                              Subscription
                            </span>
                          </p>
                        </div>
                      )}
                    </Tab>
                  );
                })}
              </Tab.List>
              <Tab.Panels>
                {tablist.map((item: string, index: number) => {
                  return (
                    <Tab.Panel
                      key={index}
                      className="py-5 pt-0 flex justify-center items-center"
                    >
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
                          className={
                            "grid grid-cols-1 gap-2 w-full max-h-[250px] sm:max-h-[350px]"
                          }
                        >
                          {subscriptionData?.data
                            ?.filter((game: any) => {
                              return (
                                game.duration_of_subscription_type ===
                                item.toUpperCase()
                              );
                            })
                            .map(
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
                                      <Menu>
                                        <div
                                          className={cn(
                                            "w-full bg-[#FFFFFF33] cursor-pointer game-option rounded-md p-3 flex items-center gap-x-3 sm:gap-x-7 relative"
                                          )}
                                        >
                                          <div
                                            className={cn(
                                              " selected-container w-5 h-5 border-2 border-white rounded-full",
                                              { "bg-[#FFB800]": checked }
                                            )}
                                          ></div>
                                          <p className="capitalize text-xs sm:text-sm md:text-base">
                                            {item.subscription_name}
                                          </p>
                                          <div className="absolute inset-y-1 right-16 text-black game-option-price w-[80px] sm:w-[100px] font-semibold bg-white rounded-md flex justify-center items-center text-xs sm:text-xs">
                                            ₦{item?.subscription_amount}
                                          </div>
                                          <div
                                            onClick={(e) => {}}
                                            className="absolute inset-y-1 right-1 text-black dropdown-container w-[50px] font-semibold bg-white rounded-md flex justify-center items-center text-xs sm:text-xs"
                                          >
                                            <Menu.Button
                                              className={"w-full h-full"}
                                            >
                                              <div className="w-full h-full flex justify-center items-center">
                                                <DownArrow />
                                              </div>
                                            </Menu.Button>
                                          </div>
                                          <Menu.Items
                                            className={
                                              "absolute w-full bottom-full left-0"
                                            }
                                          >
                                            <Menu.Item>
                                              <div className="bottom-full absolute z-10 transition-all w-full">
                                                <GameDropDown
                                                  name={item.subscription_name}
                                                  price={
                                                    item.subscription_amount
                                                  }
                                                />
                                              </div>
                                            </Menu.Item>
                                          </Menu.Items>
                                        </div>
                                      </Menu>
                                    )}
                                  </RadioGroup.Option>
                                );
                              }
                            )}
                        </RadioGroup>
                      )}
                    </Tab.Panel>
                  );
                })}
              </Tab.Panels>
            </Tab.Group>

            <button
              className="w-full bg-[#FFB800] subscribe-btn rounded-md p-3 flex justify-center items-center outline-none text-black my-4 disabled:bg-[#FFB80066]"
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
