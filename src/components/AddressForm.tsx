import { Input, Typography } from '@material-tailwind/react';
import React from 'react';

interface IAddressFormProps {
  title?: string;
  titleLabelProps?: string;
  currentStep?: number;
  onAddressChange: (addressData: IAddressProps) => void;
}

export interface IAddressProps {
  cep: string;
  street: string;
  state: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
}

function AddressForm({ title, titleLabelProps, onAddressChange, currentStep }: IAddressFormProps): JSX.Element {
    const [cep, setCep] = React.useState<string>('');
    const [street, setStreet] = React.useState<string>('');
    const [state, setState] = React.useState<string>('');
    const [number, setNumber] = React.useState<string>('');
    const [complement, setComplement] = React.useState<string>('');
    const [neighborhood, setNeighborhood] = React.useState<string>('');
    const [city, setCity] = React.useState<string>('');

    const [isDisabled, setIsDisabled] = React.useState<boolean>(true);

    const formattedCEP = cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');

    React.useEffect(() => {
        if (cep.length === 8) {
            getAddress();
        }
    }, [cep]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCep(event.target.value.replace(/[^0-9]/g, ''));
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

    React.useEffect(() => {
        if (!isDisabled) {
            onAddressChange({
                cep,
                street,
                state,
                number,
                complement,
                neighborhood,
                city,
            });
        }
    }, [cep, street, state, number, complement, neighborhood, city, isDisabled, onAddressChange]);

    return (
        <>
            <Typography variant="h5" className={titleLabelProps}>
                {title} 
            </Typography>

            <div id="address" className="flex flex-col gap-4">
        
                <Input
                    crossOrigin={''}
                    maxLength={8}
                    label="CEP"
                    size="lg"
                    value={formattedCEP}
                    disabled={currentStep == 1}
                    onChange={event => {
                        handleChange(event);
                    }}
                />
                <div className="grid grid-cols-2 gap-x-2">
          
                    <Input
                        crossOrigin={''}
                        label="Rua"
                        size="lg"
                        value={street}
                        onChange={e => setStreet(e.target.value)}
                        disabled={isDisabled || currentStep == 1}
                    />
          
                    <Input
                        crossOrigin={''}
                        label="Bairro"
                        size="lg"
                        value={neighborhood}
                        onChange={e => setNeighborhood(e.target.value)}
                        disabled={isDisabled || currentStep == 1}
                    />
                </div>
                <div className="grid grid-flow-row-dense grid-cols-3 gap-x-2">
                    <div>
            
                        <Input
                            crossOrigin={''}
                            label="Número"
                            size="lg"
                            disabled={isDisabled || currentStep == 1}
                            value={number}
                            onChange={e => setNumber(e.target.value.replace(/[^0-9]/g, ''))}
                        />
                    </div>
                    <div className="col-span-2">
            
                        <Input
                            crossOrigin={''}
                            label="Complemento"
                            size="lg"
                            disabled={isDisabled || currentStep == 1}
                            value={complement}
                            onChange={e => setComplement(e.target.value)}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-x-2">
          
                    <Input
                        crossOrigin={''}
                        label="Cidade"
                        size="lg"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                        disabled={isDisabled || currentStep == 1}
                    />
          
                    <Input
                        crossOrigin={''}
                        label="UF"
                        size="lg"
                        value={state}
                        onChange={e => setState(e.target.value)}
                        disabled={isDisabled || currentStep == 1}
                    />
                </div>
            </div>
        </>
    );
}

export { AddressForm };
