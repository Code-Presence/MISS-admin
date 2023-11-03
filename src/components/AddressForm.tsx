import { Input, Tooltip, Typography } from "@material-tailwind/react";
import React from "react";

interface IAddressFormProps {
  title?: string;
  isMandatory?: boolean;
}

function AddressForm({ title, isMandatory }: IAddressFormProps): JSX.Element {
  const [cep, setCep] = React.useState<string>("");
  const [street, setStreet] = React.useState<string>("");
  const [state, setState] = React.useState<string>("");
  const [number, setNumber] = React.useState<string>("");
  const [complement, setComplement] = React.useState<string>("");
  const [neighborhood, setNeighborhood] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");

  const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

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
    <>
      <Tooltip
        content="Campo obrigatório"
        placement="left-start"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
        className={"shadow-2xl"}
      >
        <Typography variant="h5" className="mb-4">
          {title} {isMandatory ? <></> : <>*</>}
        </Typography>
      </Tooltip>

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
    </>
  );
}

export { AddressForm };
