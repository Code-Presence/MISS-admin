import { Card, Input, Option, Select, Typography } from '@material-tailwind/react';
import { Plus } from 'lucide-react';
import React from 'react';

function CollaboratorsRegister() {
    return (
        <section className='bg-red-100 h-[95%] flex flex-col gap-2'>

            <span className='mb-2'>
                <Typography className='' variant='h4'>Registro de Colaborador</Typography>
            </span>

            <div className='w-full h-full bg-red-100'>
                <Card className='rounded-md p-4 grid grid-cols-2 gap-4'>
                    <div className='w-full gap-4'>
                        <span>
                            <Typography className='' variant='h5'>Dados do colaborador</Typography>
                        </span>
                        <div className='flex gap-4 w-full'>
                            <div className='min-w-[10rem] h-full max-w-[10rem] bg-gray-200 rounded-md border-dashed border-[2px] border-gray-400 flex items-center justify-center'>
                                <span className='flex flex-col w-full items-center justify-center'>
                                    <Plus size={32}/>
                                    <Typography variant='paragraph' className='text-center'>Foto de perfil <br /> (obrigatório)</Typography>
                                </span>
                            </div>

                            <div className='w-full flex flex-col gap-4 bg-red-400'>
                                <Input label='Nome completo'/>
                                <span className='flex gap-2'>
                                    <Input label='CPF'/>
                                    <Input label='Data de nascimento'/>
                                </span>
                                <Select label='Cargo'>
                                    <Option>Cabeleileira</Option>
                                    <Option>Maquiador</Option>
                                    <Option>Manicure</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    {/*  */}
                    <div>
                        <span>
                            <Typography className='' variant='h5'>Agenda</Typography>
                        </span>
                    </div>
                </Card>
            </div>
        </section>

    );
}

export default CollaboratorsRegister;