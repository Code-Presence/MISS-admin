import React from "react";
import { Input, Typography } from "@material-tailwind/react";
import { StepOne, StepTwo } from "./Components";
function EstablishmentRegister(): JSX.Element {
  return (
    <>
      <div className="w-full h-full bg-white p-4 overflow-hidden flex flex-col animate-fade-in-down">
        <Typography className="mb-2" variant="h4">
          Registro de estabelecimento
        </Typography>
        <hr className="" />
        <div className="box-border h-full w-full grid lg:grid-cols-2 gap-x-2 overflow-hidden">
          <div className="h-full gap-4 flex flex-col pt-2 border-r border-gray-300 pr-2">
            <StepOne />
          </div>
          <div className="h-full gap-4 flex flex-col pt-2">
            <StepTwo />
          </div>
        </div>
      </div>
    </>
  );
}

export { EstablishmentRegister };
