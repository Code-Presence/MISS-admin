import React, { Children } from "react";
import {
  Stepper,
  Step,
  Button,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

interface IStepperWithContentProps {
  children?: React.ReactNode;
  onStepChange: (newStep: number) => void;
  stepOneTitle: string;
  stepOneDescription: string;
  stepTwoTitle: string;
  stepTwoDescription: string;
  mt?: string;
  isDisabled?: boolean;
}
export function StepperWithContent({
  children,
  onStepChange,
  stepOneTitle,
  stepOneDescription,
  stepTwoTitle,
  stepTwoDescription,
  mt,
  isDisabled,
}: IStepperWithContentProps) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => {
    if (!isLastStep) {
      setActiveStep(cur => cur + 1);
      onStepChange(activeStep + 2);
    }
  };

  const handlePrev = () => {
    if (!isFirstStep) {
      setActiveStep(cur => cur - 1);
      onStepChange(activeStep + 0);
    }
  };

  return (
    <div
      className={`w-full h-full flex flex-col justify-between py-4 mt-${mt}`}
    >
      <div className="w-full px-24">
        <Stepper
          activeStep={activeStep}
          isLastStep={value => setIsLastStep(value)}
          isFirstStep={value => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue-gray" : "gray"}
              >
                {stepOneTitle}
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                {stepOneDescription}
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue-gray" : "gray"}
              >
                {stepTwoTitle}
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue-gray" : "gray"}
                className="font-normal"
              >
                {stepTwoDescription}
              </Typography>
            </div>
          </Step>
        </Stepper>
      </div>
      <div className="h-full mt-24 border rounded-md p-4">{children}</div>
      <div className="mt-4 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Voltar
        </Button>
        {isDisabled ? (
          <Tooltip
            content="Preencha os campos obrigatórios"
            placement="left-start"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <div>
              <Button onClick={handleNext} disabled={isDisabled}>
                Próximo
              </Button>
            </div>
          </Tooltip>
        ) : (
          <Button onClick={handleNext} disabled={false}>
            Próximo
          </Button>
        )}
      </div>
    </div>
  );
}
