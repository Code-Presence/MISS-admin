import React, { useEffect } from 'react';
import { FormLabel } from '../../../../components/FormLabel';
import { Input } from '@material-tailwind/react';
import { AddressForm, IAddressProps } from '../../../../components/AddressForm';
import { createUser } from '../../../../api/users/create';

interface IStepOneProps {
  disableStepButton?: (isDisabled: boolean) => void | null;
  submit? : number;
}

function StepOne({ disableStepButton, submit }: IStepOneProps): JSX.Element {
    const [birthday, setBirthday] = React.useState<string>('');
    const [phone, setPhone] = React.useState<string>('');
    const [cpf, setCpf] = React.useState<string>('');
    const [name, setName] = React.useState<string>('');
    const [email, setEmail] = React.useState<string>('');

    const [address, setAddress] = React.useState({
        line1: '',
        line2: '',
        line3: '',
        postalCode: '',
        neighborhood: '',
        state: '',
    });

    const [isDisabled, setIsDisabled] = React.useState<boolean>(false);

    const birhtdayYear = birthday.substring(0, 4);

    const convertedBirthdayear = parseInt(birhtdayYear);

    const formattedPhone = phone.replace(
        /^(\d{2})(\d)(\d{4})(\d{4})$/,
        '($1) $2 $3 $4'
    );

    const formattedCPF = cpf.replace(
        /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
        '$1.$2.$3-$4'
    );

    const getYear = () => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        return currentYear;
    };

    const handleSubmit = () => {
        createUser({
            name: name,
            document: formattedCPF,
            email: email,
            phone: phone,
            bornAt: birthday,
            password: 'teste123',
            address: {
                line1: address.line1,
                line2: address.line2,
                line3: address.line3,
                postalCode: address.postalCode,
                neighborhood: address.neighborhood,
                state: address. state,
            }
        });
    };

    useEffect(() => {
        if (
            (name.length >= 5 && cpf.length == 11 && birthday.charAt(0) == '1') ||
      birthday.charAt(0) == '2'
        ) {
            if (getYear() - convertedBirthdayear >= 18) {
                setIsDisabled(true);

                disableStepButton(isDisabled);
            }
        }
    }, [name, cpf, birthday]);

    useEffect(() => {
        if (submit) {
            handleSubmit();
            console.log('submitado');
        }
    }, [submit]);

    const handleAddressChange = (addressData: IAddressProps) => {
        setAddress({
            line1: addressData.street,
            line2: addressData.complement,
            line3: addressData.number,
            postalCode: addressData.cep,
            neighborhood: addressData.neighborhood,
            state: addressData.state,
        });
        console.log('Dados do endereço no pai:', address);
    };


    return (
        <div className="grid lg:grid-cols-2 gap-x-4 animate-fade-in-down">
            <div className="flex flex-col gap-4 border-r sm:border-none pr-4">
                <div id="nome">
                    <FormLabel content="Nome" isMandatory={true} />
                    <Input
                        minLength={5}
                        size="lg"
                        placeholder="sócio fundador ou proprietário"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={name}
                        onChange={event => setName(event.target.value)}
                    />
                </div>

                <div id="cpf">
                    <FormLabel content="CPF" isMandatory={true} />
                    <Input
                        maxLength={11}
                        size="lg"
                        placeholder="000.000.000-00"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={formattedCPF}
                        onChange={event =>
                            setCpf(event.target.value.replace(/[^0-9]/g, ''))
                        }
                    />
                </div>

                <div id="birth">
                    <FormLabel content="Aniversário" isMandatory={true} />
          
                    <Input
                        maxLength={8}
                        type="date"
                        size="lg"
                        placeholder="DD/MM/AAAA"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={birthday}
                        onChange={event => setBirthday(event.target.value)}
                    />
                </div>

                <div id="email">
                    <FormLabel content="Email" />
          
                    <Input
                        type="email"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>

                <div id="num">
                    <FormLabel content="Número" />
          
                    <Input
                        maxLength={11}
                        size="lg"
                        placeholder="(00) 0 0000 0000"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={formattedPhone}
                        onChange={event =>
                            setPhone(event.target.value.replace(/[^0-9]/g, ''))
                        }
                    />
                </div>
            </div>

            <div>
                <AddressForm title="Endereço Residencial" isMandatory={true} onAddressChange={handleAddressChange}/>
            </div>
        </div>
    );
}

export { StepOne };
