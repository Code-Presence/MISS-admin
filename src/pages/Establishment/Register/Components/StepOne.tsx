import React, { useEffect } from "react";
import { FormLabel } from "../../../../components/FormLabel";
import { Input, Typography } from "@material-tailwind/react";
import { AddressForm } from "../../../../components/AddressForm";

interface IStepOneProps {
  disableStepButton?: (isDisabled: boolean) => void | null;
}

function StepOne({ disableStepButton }: IStepOneProps): JSX.Element {
  const [birthday, setBirthday] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [cpf, setCpf] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");

  const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

  const birhtdayYear = birthday.substring(0, 4);

  const convertedBirthdayear = parseInt(birhtdayYear);

  const formattedPhone = phone.replace(
    /^(\d{2})(\d)(\d{4})(\d{4})$/,
    "($1) $2 $3 $4"
  );

  const formattedCPF = cpf.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );

  const getYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    return currentYear;
  };

  useEffect(() => {
    if (
      (name.length >= 5 && cpf.length == 11 && birthday.charAt(0) == "1") ||
      birthday.charAt(0) == "2"
    ) {
      if (getYear() - convertedBirthdayear >= 18) {
        setIsDisabled(true);
        // @ts-ignore
        disableStepButton(isDisabled);
      }
    }
  }, [name, cpf, birthday]);

  return (
    <div className="grid lg:grid-cols-2 gap-x-4 animate-fade-in-down">
      <div className="flex flex-col gap-4 border-r sm:border-none pr-4">
        <div id="nome">
          <FormLabel content="Nome" isMandatory={true} />
          {/* @ts-ignore */}
          <Input
            minLength={5}
            size="lg"
            placeholder="sócio fundador ou proprietário"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>

        <div id="cpf">
          <FormLabel content="CPF" isMandatory={true} />
          {/* @ts-ignore */}
          <Input
            maxLength={11}
            size="lg"
            placeholder="000.000.000-00"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={formattedCPF}
            onChange={event =>
              setCpf(event.target.value.replace(/[^0-9]/g, ""))
            }
          />
        </div>

        <div id="birth">
          <FormLabel content="Aniversário" isMandatory={true} />
          {/* @ts-ignore */}
          <Input
            maxLength={8}
            type="date"
            size="lg"
            placeholder="DD/MM/AAAA"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={birthday}
            onChange={event => setBirthday(event.target.value)}
          />
        </div>

        <div id="email">
          <FormLabel content="Email" />
          {/* @ts-ignore */}
          <Input
            type="email"
            placeholder="name@mail.com"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>

        <div id="num">
          <FormLabel content="Número" />
          {/* @ts-ignore */}
          <Input
            maxLength={11}
            size="lg"
            placeholder="(00) 0 0000 0000"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            value={formattedPhone}
            onChange={event =>
              setPhone(event.target.value.replace(/[^0-9]/g, ""))
            }
          />
        </div>
      </div>

      <div>
        <AddressForm title="Endereço Residencial" isMandatory={true} />
      </div>
    </div>
  );
}

export { StepOne };
