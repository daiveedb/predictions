"use client";
import ContactForm from "@/components/Contact/ContactForm";
import React from "react";
import { socialIcons } from "@/dummydata";

const page = () => {
  return (
    <div className="w-full flex justify-center items-center p-10">
      <div className="w-[50%]">
        <div className="my-4">
          <p className="text-5xl py-3 font-semibold text-center">
            We’d love to hear from you!
          </p>
          <p className="text-helperText text-center">
            Our friendly team is always here and happy to help you at all time.
          </p>
        </div>
        <div className="bg-[#FFFFFF44] p-10 rounded-lg">
          <p className="text-3xl font-medium"> Send Message</p>
          <p className="text-helperText">
            Our friendly team is always here and happy to help you at all time.
          </p>
          <ContactForm />
          <div className="grid grid-cols-5 gap-2 w-1/2 mx-auto pt-5">
            {socialIcons.map((item: any) => {
              return (
                <div
                  className="p-2 justify-center items-center flex w-10 h-10 rounded-full bg-[#FFFFFF33]"
                  key={item.id}
                >
                  {item.icon}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
