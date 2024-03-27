import React from "react";
import ButtonWithIcon from "../General/ButtonWithIcon";
import UpRightArrow from "@/app/icons/UpRightArrow";
import OutlineTelegram from "@/app/icons/OutlineTelegram";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="md:p-10 md:py-20 p-5 ">
      <p className="lg:text-5xl md:text-5xl sm:text-3xl text-2xl xl:text-6xl font-bold md:w-[80%] lg:w-[70%] xl:w-[50%]">
        Win more with Expert predictions
      </p>
      <p className="text-[#FFFFFFCC] lg:w-[80%] xl:w-[60%] text-xs sm:text-sm md:text-base py-3 md:py-7">
        Access 50+ leagues for expert insights guiding you to lucrative wins. We
        offer a wide range of opportunities and seasoned expertise for informed
        betting decisions.
      </p>
      <div className="w-[45%] flex gap-x-5 items-center">
        <Link href={"/pricing"}>
          <ButtonWithIcon
            title="Subscribe"
            classNames="rounded-full text-xs sm:text-sm md:text-base bg-yellow-500 text-black px-5"
            icon={<UpRightArrow />}
          />
        </Link>
        <ButtonWithIcon
          title="Join us on Telegram"
          classNames="rounded-full bg-white text-xs sm:text-sm md:text-base text-black px-5 w-max text-nowrap nowrap"
          icon={<OutlineTelegram width={15} height={15} />}
        />
      </div>
    </div>
  );
};

export default Hero;
