import React, { useEffect } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { StepOne, StepTwo } from './Components';
import { useNavigate } from 'react-router-dom';

function EstablishmentRegister(): JSX.Element {
    const [currentStep, setCurrentStep] = React.useState<number>(1);
    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

    const [message, setMessage] = React.useState<string>('');
    const [submit, setSubmit] = React.useState<number>(0);

    const handleButtonClick = () => {
        setSubmit(1);
    };


    useEffect(() => {
        setIsDisabled(false);
    }, []);

    const handleStepChange = (newStep: number) => {
        console.log('next step');
        setCurrentStep(newStep);
    };

    const handleEnableButton = () => {
        setIsDisabled(false);
    };

    const navigate = useNavigate();

    return (
        <>
            <div className="w-full h-full bg-white p-4 overflow-hidden flex flex-col animate-fade-in-down">
                <Typography className="mb-2" variant="h4">
          Registro de estabelecimento
                </Typography>
                <hr className="" />

                <div className="box-border h-full w-full overflow-hidden  flex flex-col items-center pt-8">

                    {currentStep == 1 ? (
                        <StepOne disableStepButton={() => handleEnableButton()} submit={submit}/>
                    ) : (
                        <StepTwo />
                    )}

                </div>
                <div className="bg-red-100 w-full justify-between flex">
                    <Button disabled={false} onClick={() => navigate(-1)}>
                      Voltar
                    </Button>

                    <Button disabled={false} onClick={() => handleButtonClick()}>
                      Próximo
                    </Button>
                </div>
            </div>
        </>
    );
}

export { EstablishmentRegister };
