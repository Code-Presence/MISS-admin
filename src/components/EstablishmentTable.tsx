import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { EyeIcon } from 'lucide-react';
import {
    ArrowDownTrayIcon,
    MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardFooter,
    Avatar,
    Input,
    Button,
    IconButton,
    Tooltip,
} from '@material-tailwind/react';

const TABLE_HEAD = [
    'Estabelecimento',
    'Visitas hoje',
    'Data de Registro',
    'Status',
    'Funcionários',
    '',
];

import Logo1 from '../assets/mocks/logo-salao-1.png';
import Team1 from '../assets/mocks/team-1-800x800.jpg';
import Team2 from '../assets/mocks/team-2-800x800.jpg';
import Team3 from '../assets/mocks/team-3-800x800.jpg';
import Team4 from '../assets/mocks/team-4-470x470.png';
import { CircularPagination } from './Pagination';
import { EditMenuTable } from './EditMenuTable';
import { useNavigate } from 'react-router-dom';

const TABLE_ROWS = [
    {
        img: Logo1,
        name: 'Salão RC Hair',
        amount: '200',
        date: 'Wed 3:00pm',
        status: 'paid',
        account: 'visa',
        accountNumber: '1234',
        expiry: '06/2026',
    },
];

interface IEstablishmentProps {
  id: string;
  name: string;
  document: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
    line3: string;
    postalCode: string;
    neighborhood: string;
    state: string;
  };
  foundedAt: string;
}


export function EstablishmentTable() {
    const [establishments, setEstablishments] = useState<IEstablishmentProps[]>([]);

    const navigate = useNavigate();

    // const [establishments, setEstablishments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/establishments')
            .then(response => response.json())
            .then(data => setEstablishments(data))
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

  
    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                    <div>
                        <Typography variant="h5" color="blue-gray">
              Estabelecimentos cadastrados
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
              Aqui está detalhes dos estabelecimentos cadastrados
                        </Typography>
                    </div>
                    <div className="flex w-full shrink-0 gap-2 md:w-max">
                        <div className="w-full md:w-72">
                            {/* @ts-ignore */}
                            <Input
                                label="Buscar"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>
                        <Button className="flex items-center gap-3" size="sm">
                            <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Baixar
                        </Button>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map(head => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
          
                        {establishments.length > 0 ? (
                            establishments.map((establishment, index) => {
                                const isLast = index === establishments.length - 1;
                                const classes = isLast
                                    ? 'p-4'
                                    : 'p-4 border-b border-blue-gray-50';

                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    src={Logo1}
                                                    alt={index.toString()}
                                                    size="md"
                                                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                                                />
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-bold"
                                                >
                                                    {establishment.name}
                                                </Typography>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                        1000
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                        10 / 2023
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <div className="flex items-center space-x-2">
                                                <div className="w-3 h-3 bg-beauty-green rounded-full" />
                                                <span>ativo</span>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                                    <div className="flex">
                                                        <img
                                                            src={Team1}
                                                            alt="..."
                                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow"
                                                        ></img>
                                                        <img
                                                            src={Team2}
                                                            alt="..."
                                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        ></img>
                                                        <img
                                                            src={Team3}
                                                            alt="..."
                                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        ></img>
                                                        <img
                                                            src={Team4}
                                                            alt="..."
                                                            className="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                                                        ></img>
                                                    </div>
                                                </td>
                                            </div>
                                        </td>

                                        <td className={`${classes} flex flec-row gap-4`}>
                                            <Tooltip content="Vizualizar">
                                                <IconButton
                                                    onClick={() => navigate(`/establishment/record/${establishment.id}`)}
                                                >
                                                    <EyeIcon />
                                                </IconButton>
                                            </Tooltip>
                                            <EditMenuTable />
                                        </td>
                                    </tr>
                                );
                            })
                        ) : (
                            <p>Carregando...</p>
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
                <CircularPagination />
            </CardFooter>
        </Card>
    );
}
