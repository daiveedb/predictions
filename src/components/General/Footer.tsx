"use client";
import React from "react";
import Logo from "../Navigation/Logo";
import Rated18 from "@/app/icons/Rated18";
import ButtonWithIcon from "./ButtonWithIcon";
import DoubleUpArrows from "@/app/icons/DoubleUpArrows";

const Footer = () => {
  const scrollToTop = () => {
    // "use server";
    window.scrollTo(0, 0);
  };
  return (
    <div className="bg-gradient-to-b from-cardBg_blue via-[#05022B] to-[#05022B] p-5 py-10 md:p-10 lg:p-20 lg:px-28 mt-16">
      <div className="flex flex-col sm:flex-row gap-10 justify-between sm:gap-x-2 md:gap-x-5 items-end">
        <div className="flex-1">
          <Logo />
          <p className="text-helperText text-xs py-5">
            Predict wiser is a product of Whispa Konnect Ltd, a licensed mobile
            value added service company based in Lagos Nigeria. We provide
            services for industries like Fintech, Lending, Software development
            and gamification. Other products include SMS messaging, USSD and
            Voice.
          </p>
          <p className="text-helperText text-xs">
            Copyright © 2024 Predict wiser. All rights reserved
          </p>
        </div>
        <div className="flex flex-1 md:px-10 gap-x-10 sm:justify-between w-full">
          <div>
            <div className="pb-8 text-xs">
              <p>Subscribe for tip plans</p>
              <p className="py-3">Contact Us</p>
              <p>About Us</p>
            </div>
            <div className="flex gap-x-1 md:gap-x-3 items-center">
              <p className="font-bold">Play Responsibly</p>
              <Rated18 height={20} width={20} />
            </div>
          </div>
          <div>
            <div className="pb-8 text-xs">
              <p>Tips</p>
              <p className="py-3">Privacy Policy</p>
              <p>Terms and Conditions</p>
            </div>
            <div className="flex gap-x-3 justify-end md:items-center">
              <ButtonWithIcon
                title="Back to top"
                icon={<DoubleUpArrows />}
                classNames="bg-[#FFFFFF16] rounded border text-xs p-2 lg:text-sm lg:p-3"
                action={scrollToTop}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
