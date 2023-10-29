import React from "react";
import { Input, Typography } from "@material-tailwind/react";
import { StepOne } from "./Components/StepOne";
function EstablishmentRegister(): JSX.Element {
  return (
    <>
      <div className="w-full h-full bg-white p-4 overflow-hidden flex flex-col animate-fade-in-down">
        <Typography className="mb-2" variant="h4">
          Registro de estabelecimento
        </Typography>
        <div className="box-border h-full w-full grid lg:grid-cols-3 gap-x-3 overflow-hidden">
          <div className="h-full gap-4 flex flex-col pt-2">
            <StepOne />
          </div>
        </div>
      </div>

      {/* <div className="w-full h-full bg-white border rounded-lg shadow-lg p-4">
        <div className="h-full w-full grid lg:grid-cols-3 gap-x-3  overflow-hidden">
          <div className="h-full bg-gray-200 rounded-md p-2 box-border"></div>
          <div className="h-full bg-gray-200 rounded-md">di</div>
          <div className="h-full bg-gray-200 rounded-md">di</div>
        </div>
      </div> */}
    </>
  );
}

export { EstablishmentRegister };
