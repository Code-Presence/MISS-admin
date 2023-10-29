import React from "react";
import { FormLabel } from "../../../../components/FormLabel";
import { Input } from "@material-tailwind/react";

function StepOne(): JSX.Element {
  const [birthday, setBirthday] = React.useState<string>("");
  const [number, setNumber] = React.useState<string>("");
  const [cpf, setCpf] = React.useState<string>("");

  const formattedNumber = number.replace(
    /^(\d{2})(\d)(\d{4})(\d{4})$/,
    "($1) $2 $3 $4"
  );

  const formattedCPF = cpf.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );

  return (
    <>
      <div id="nome">
        <FormLabel content="Razão Social" isMandatory={true} />
        {/* @ts-ignore */}
        <Input
          minLength={5}
          size="lg"
          placeholder="sócio ou dono"
          className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
          labelProps={{
            className: "before:content-none after:content-none",
          }}
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
          onChange={event => setCpf(event.target.value.replace(/[^0-9]/g, ""))}
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
          value={formattedNumber}
          onChange={event =>
            setNumber(event.target.value.replace(/[^0-9]/g, ""))
          }
        />
      </div>
    </>
  );
}

export { StepOne };
