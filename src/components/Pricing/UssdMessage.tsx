import { AxiosError } from "axios";
import React from "react";
import ReactLoader from "react-loading";
import { ussdInputType } from "./UssdComponent";
import { useUssdCode } from "@/api/gatUSSD";

interface UssdMessageProps {
  ussdInput: ussdInputType;
}

const UssdMessage: React.FunctionComponent<UssdMessageProps> = ({
  ussdInput,
}) => {
  const { data: ussdResponse, error, isError } = useUssdCode(ussdInput);
  const errorMessage =
    error instanceof AxiosError ? error.response?.data.message : "";

  return (
    <div className="flex h-11 w-full items-center justify-center rounded-md border border-white px-1">
      {ussdResponse || isError ? (
        <p className="text-xs sm:text-sm">
          {ussdResponse ? `${ussdResponse.ussd_code}` : errorMessage}
        </p>
      ) : (
        <div className="scale-[0.2]">
          <ReactLoader color="white" height={50} width={50} type="spin" />
        </div>
      )}
    </div>
  );
};

export default UssdMessage;
