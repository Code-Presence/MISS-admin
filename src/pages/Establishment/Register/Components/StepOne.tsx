import React from "react";
import { FormLabel } from "../../../../components/FormLabel";
import { Input, Typography } from "@material-tailwind/react";

function StepOne(): JSX.Element {
  const [birthday, setBirthday] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [cpf, setCpf] = React.useState<string>("");

  const [cep, setCep] = React.useState<string>("");
  const [street, setStreet] = React.useState<string>("");
  const [state, setState] = React.useState<string>("");
  const [number, setNumber] = React.useState<string>("");
  const [complement, setComplement] = React.useState<string>("");
  const [neighborhood, setNeighborhood] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");

  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

  const formattedPhone = phone.replace(
    /^(\d{2})(\d)(\d{4})(\d{4})$/,
    "($1) $2 $3 $4"
  );

  const formattedCPF = cpf.replace(
    /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
    "$1.$2.$3-$4"
  );

  const formattedCEP = cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");

  React.useEffect(() => {
    if (cep.length === 8) {
      getAddress();
    }
  }, [cep]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value.replace(/[^0-9]/g, ""));
  };

  const getAddress = async (): Promise<void> => {
    const cepvalid = cep;

    if (cepvalid?.length !== 8) {
      return;
    } else {
      setIsDisabled(false);
    }

    await fetch(`https://viacep.com.br/ws/${cepvalid}/json/`)
      .then(res => res.json())
      .then(data => {
        if (data === undefined) {
          return;
        }
        setCep(`${data.cep}`);
        setStreet(`${data.logradouro}`);
        setNeighborhood(`${data.bairro}`);
        setState(data.uf);
        setCity(data.localidade);
      });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-x-4 animate-fade-in-down">
      <div className="flex flex-col gap-4">
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
        <Typography variant="h5" className="mb-4">
          Endereço
        </Typography>
        <div id="address" className="flex flex-col gap-4">
          {/* @ts-ignore */}
          <Input
            maxLength={8}
            label="CEP"
            size="lg"
            value={formattedCEP}
            onChange={event => {
              handleChange(event);
            }}
          />
          <div className="grid grid-cols-2 gap-x-2">
            {/* @ts-ignore */}
            <Input
              label="Rua"
              size="lg"
              value={street}
              onChange={e => setStreet(e.target.value)}
              disabled={isDisabled}
            />
            {/* @ts-ignore */}
            <Input
              label="Bairro"
              size="lg"
              value={neighborhood}
              onChange={e => setNeighborhood(e.target.value)}
              disabled={isDisabled}
            />
          </div>
          <div className="grid grid-flow-row-dense grid-cols-3 gap-x-2">
            {/* <div className="bg-black flex items-start"> */}
            <div>
              {/* @ts-ignore */}
              <Input
                label="Número"
                size="lg"
                disabled={isDisabled}
                value={number}
                onChange={e => setNumber(e.target.value.replace(/[^0-9]/g, ""))}
              />
            </div>
            <div className="col-span-2">
              {/* @ts-ignore */}
              <Input
                label="Complemento"
                size="lg"
                disabled={isDisabled}
                value={complement}
                onChange={e => setComplement(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-2">
            {/* @ts-ignore */}
            <Input
              label="Cidade"
              size="lg"
              value={city}
              onChange={e => setCity(e.target.value)}
              disabled={isDisabled}
            />
            {/* @ts-ignore */}
            <Input
              label="UF"
              size="lg"
              value={state}
              onChange={e => setState(e.target.value)}
              disabled={isDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export { StepOne };
