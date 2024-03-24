import React from 'react';
import { Button, Card, Input, Typography } from '@material-tailwind/react';
import { Plus } from 'lucide-react';
import { AddressForm, IAddressProps } from '../../../components/AddressForm';

function EstablishmentRegister(): JSX.Element {
    const [step, setStep] = React.useState(0);

    const [ownerName, setOwnerName] = React.useState('');
    const [ownerDocument, setOwnerDocument] = React.useState('');
    const [ownerBirth, setOwnerBirth] = React.useState('');
    const [ownerNumber, setOwnerNumber] = React.useState('');
    const [ownerEmail, setOwnerEmail] = React.useState('');

    const [ownerAddress, setOwnerAddress] = React.useState({
        line1: '',
        line2: '',
        line3: '',
        postalCode: '',
        neighborhood: '',
        state: '',
    });
    const [commercialAddress, setCommercialAddress] = React.useState({
        line1: '',
        line2: '',
        line3: '',
        postalCode: '',
        neighborhood: '',
        state: '',
    });

    const handleAddressChange = (addressData: IAddressProps) => {
        setOwnerAddress({
            line1: addressData.street,
            line2: addressData.complement,
            line3: addressData.number,
            postalCode: addressData.cep,
            neighborhood: addressData.neighborhood,
            state: addressData.state,
        });
        console.log('Dados do endereço no pai:', ownerAddress);
    };

    const handleCommercialAddressChange = (addressData: IAddressProps) => {
        setCommercialAddress({
            line1: addressData.street,
            line2: addressData.complement,
            line3: addressData.number,
            postalCode: addressData.cep,
            neighborhood: addressData.neighborhood,
            state: addressData.state,
        });
        console.log('Dados do endereço no pai:', commercialAddress);
    };

    return (
        <>
            <div className="w-full h-full overflow-hidden flex flex-col animate-fade-in-down relative justify-between">
    
                <section className="w-full min-h-[10rem] flex flex-col gap-6" >
                    <span className='mb-2'>
                        <Typography className='' variant='h4'>Registro de estabelecimento</Typography>
                    </span>
                
                    <Card className={`w-full rounded-md p-4 min-h-[3rem] grid lg:grid-cols-2 grid-cols-1 gap-4 transition-colors ${step == 1 ? 'bg-white/80' : 'bg-white'}`}>
                        <div className='w-full min-h-[2rem]  flex flex-col gap-4'>
                            <span>
                                <Typography className={`${step == 1 ? 'text-blue-gray-400' : 'text-blue-gray-900'} transition-colors`} variant='h5' >Dados do proprietário</Typography>
                            </span>
                            <div className='w-full flex gap-4'>
                                <div className='min-w-[10rem] h-[10rem] bg-gray-200 rounded-md border-dashed border-[2px] border-gray-400 flex items-center justify-center'>
                                    <span className='flex flex-col w-full items-center justify-center'>
                                        <Plus size={32}/>
                                        <Typography variant='paragraph' className='text-center'>Foto de perfil <br /> (opcional)</Typography>
                                    </span>
                                </div>
                                <div className='w-full gap-2 flex flex-col item-center justify-between'>
                                    <Input 
                                        size='lg' 
                                        label='Nome completo' 
                                        onChange={(e) => setOwnerName(e.target.value)}
                                        value={ownerName}
                                        disabled={step == 1}
                                    />
                                    <span className='flex gap-2'>
                                        <Input
                                            size='lg'
                                            label='CPF' 
                                            onChange={(e) => setOwnerDocument(e.target.value)}
                                            value={ownerDocument}
                                            disabled={step == 1}
                                        />
                                        <Input 
                                            size='lg' 
                                            label='Data de nascimento' 
                                            onChange={(e) => setOwnerBirth(e.target.value)}
                                            value={ownerBirth}
                                            disabled={step == 1}
                                        />
                                    </span>
                                    <span className='flex gap-2'>
                                        <Input
                                            size='lg'
                                            label='Número telefônico' 
                                            onChange={(e) => setOwnerNumber(e.target.value)}
                                            value={ownerNumber}
                                            disabled={step == 1}
                                        />
                                        <Input
                                            size='lg' 
                                            label='Email' 
                                            onChange={(e) => setOwnerEmail(e.target.value)}
                                            value={ownerEmail}
                                            disabled={step == 1}
                                        />
                                    </span>
                                </div>
                            </div>
                 
                        </div>
                        {/*  */}
                        <div className='w-full min-h-[2rem]  flex flex-col gap-4'>
                            <AddressForm 
                                title="Endereço Residencial" 
                                onAddressChange={handleAddressChange}
                                currentStep={step}
                                titleLabelProps={step == 1 ? 'text-blue-gray-400' : 'text-blue-gray-900'} 
                            />
                        </div>
                    </Card>
                    {/*  */}
                    {/*  */}
                    <Card className={`w-full rounded-md  p-4 min-h-[3rem]  grid-cols-2 gap-4 animate-fade-in-down ${step == 1 ? 'grid' : 'hidden'}`}>
                        <div className='w-full min-h-[2rem]  flex flex-col gap-4'>
                            <span>
                                <Typography className='' variant='h5'>Dados do Estabelecimento</Typography>
                            </span>

                            <div className='flex justify-between gap-4'>
                                <div className='min-w-[10rem] h-[10rem] bg-gray-200 rounded-md border-dashed border-[2px] border-gray-400 flex items-center justify-center'>
                                    <span className='flex flex-col w-full items-center justify-center'>
                                        <Plus size={32}/>
                                        <Typography variant='paragraph' className='text-center'>Logomarca <br /> (obrigatório)</Typography>
                                    </span>
                                </div>
                                <div className='w-full flex flex-col gap-4'>
                                    <span className='flex gap-2'>
                                        <Input size='lg' label='Nome do estabelecimento' />
                                        <Input size='lg' label='CPNJ' />
                                    </span>
                                    <span className='flex gap-2'>
                                        <Input size='lg' label='Data de fundação' />
                                        <Input size='lg' label='Número telefônico' />
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/*  */}
                        <div className='w-full min-h-[2rem]  flex flex-col gap-4'>
                            <AddressForm 
                                title="Endereço Comercial" 
                                titleLabelProps='text-blue-gray-900'
                                onAddressChange={handleCommercialAddressChange}
                            />
                        </div>
                    </Card>
                </section>
                {/*  */}

                <footer className='w-full flex justify-between bg-white'>
                    <span>
                        <Button variant='text' color='red'>Sair</Button>
                    </span>
                    <span className='flex gap-4'>
                        <Button 
                            onClick={() => setStep(step - 1)}
                            disabled={step == 0}
                            color='blue'
                        >
                        Voltar
                        </Button>
                        <Button 
                            color={step == 0 ? 'light-green' : 'green'}
                            onClick={() => {
                                {step == 0 && setStep(step + 1);}
                            }}>
                            {step == 0 ? 'Avançar' : 'Salvar'}
                        </Button>
                    </span>
                </footer>
            </div>
        </>
    );
}

export { EstablishmentRegister };
