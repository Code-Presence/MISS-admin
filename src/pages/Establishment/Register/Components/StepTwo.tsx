import React from 'react';
import { FormLabel } from '../../../../components/FormLabel';
import { Input, Typography } from '@material-tailwind/react';
import { AddressForm } from '../../../../components/AddressForm';

function StepTwo(): JSX.Element {
    const [birthday, setBirthday] = React.useState<string>('');
    const [number, setNumber] = React.useState<string>('');
    const [cpf, setCpf] = React.useState<string>('');
    const [cnpj, setCnpj] = React.useState<string>('');

    const formattedNumber = number.replace(
        /^(\d{2})(\d)(\d{4})(\d{4})$/,
        '($1) $2 $3 $4'
    );

    const formatCnpj = cnpj.replace(
        /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
        '$1.$2.$3/$4-$5'
    );

    return (
        <div className="grid lg:grid-cols-2 gap-x-4 animate-fade-in-down">
            <div className="flex flex-col gap-4 border-r pr-4">
                <div id="nome">
                    <FormLabel content="Razão Social" isMandatory={true} />
                    {/* @ts-ignore */}
                    <Input
                        minLength={5}
                        size="lg"
                        placeholder="Razão Social"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                </div>

                <div id="nome">
                    <FormLabel content="Nome fantasia" isMandatory={true} />
                    {/* @ts-ignore */}
                    <Input
                        minLength={5}
                        size="lg"
                        placeholder="Nome da empresa"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                </div>

                <div id="cpf">
                    <FormLabel content="CNPJ" isMandatory={true} />
                    <Input
                        maxLength={14}
                        size="lg"
                        placeholder="00.000.000/0000-00"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={formatCnpj}
                        onChange={event =>
                            setCnpj(event.target.value.replace(/[^0-9]/g, ''))
                        }
                    />
                </div>

                <div id="email">
                    <FormLabel content="Email da empresa" isMandatory={true} />
                    <Input
                        type="email"
                        placeholder="name@mail.com"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                    />
                </div>

                <div id="num">
                    <FormLabel content="Número comercial" isMandatory={true} />

                    <Input
                        maxLength={11}
                        size="lg"
                        placeholder="(00) 0 0000 0000"
                        className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                            className: 'before:content-none after:content-none',
                        }}
                        value={formattedNumber}
                        onChange={event =>
                            setNumber(event.target.value.replace(/[^0-9]/g, ''))
                        }
                    />
                </div>
            </div>

            <div id="address">
                <AddressForm title="Endereço Comercial" />
            </div>
        </div>
    );
}

export { StepTwo };
