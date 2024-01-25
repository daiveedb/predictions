import React from "react";
import ButtonWithIcon from "../General/ButtonWithIcon";
import UpRightArrow from "@/app/icons/UpRightArrow";
import OutlineTelegram from "@/app/icons/OutlineTelegram";

const Hero = () => {
  return (
    <div className="p-10 py-20 ">
      <p className="text-6xl font-bold w-[50%]">
        Win more with Expert predictions
      </p>
      <p className="text-[#FFFFFFCC] w-[60%] py-7">
        Access 50+ leagues for expert insights guiding you to lucrative wins. We
        offer a wide range of opportunities and seasoned expertise for informed
        betting decisions.
      </p>
      <div className="w-[45%] flex gap-x-5 items-center">
        <ButtonWithIcon
          title="Subscribe"
          classNames="rounded-full bg-yellow-500 text-black px-5"
          icon={<UpRightArrow />}
        />
        <ButtonWithIcon
          title="Join us on Telegram"
          classNames="rounded-full bg-white text-black px-5"
          icon={<OutlineTelegram />}
        />
      </div>
    </div>
  );
};

export default Hero;
