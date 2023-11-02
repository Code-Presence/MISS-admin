import React from "react";
import { Input, Typography } from "@material-tailwind/react";
import { StepOne, StepTwo } from "./Components";
import { Stepper } from "../../../components";

function EstablishmentRegister(): JSX.Element {
  const [currentStep, setCurrentStep] = React.useState<number>(1);

  const handleStepChange = (newStep: number) => {
    setCurrentStep(newStep);
  };

  return (
    <>
      <div className="w-full h-full bg-white p-4 overflow-hidden flex flex-col animate-fade-in-down">
        <Typography className="mb-2" variant="h4">
          Registro de estabelecimento
        </Typography>
        <hr className="" />
        <Stepper
          onStepChange={handleStepChange}
          stepOneTitle="Proprietário"
          stepOneDescription="Dados do proprietário"
          stepTwoTitle="Estabelecimento"
          stepTwoDescription="Dados do estabelecimento"
          mt={"4"}
        >
          <div className="box-border h-full w-full overflow-hidden">
            <div className="h-full gap-4 flex flex-col pt-2">
              {currentStep == 1 ? <StepOne /> : <StepTwo />}
            </div>
          </div>
        </Stepper>
      </div>
    </>
  );
}

export { EstablishmentRegister };
