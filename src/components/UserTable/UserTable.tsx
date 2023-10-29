import React from "react";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  Avatar,
  Input,
  Button,
  Chip,
} from "@material-tailwind/react";

import { User } from "lucide-react";

import { useLocation } from "react-router-dom";

const TABLE_HEAD = [
  "Usuário",
  "Visitas",
  "Data de Registro",
  "Status",
  "Cidade/Estado",
  "",
];

import Logo1 from "../../assets/mocks/logo-salao-1.png";
import Team1 from "../../assets/mocks/team-1-800x800.jpg";
import Team2 from "../../assets/mocks/team-2-800x800.jpg";
import Team3 from "../../assets/mocks/team-3-800x800.jpg";
import Team4 from "../../assets/mocks/team-4-470x470.png";
import { CircularPagination } from "../Pagination";
import { EditMenuTable } from "../EditMenuTable";
import { UserTableChips } from "./Components/UserTableChips";

const TABLE_ROWS = [
  {
    img: Logo1,
    name: "Átila de Freitas",
    amount: "200",
    date: "Wed 3:00pm",
    status: 1,
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
    isEmployer: false,
  },
  {
    img: Logo1,
    name: "José Carvalho",
    amount: "100",
    date: "Wed 3:00pm",
    status: 1,
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
    isEmployer: true,
  },
  {
    img: Logo1,
    name: "Ana Letícia",
    amount: "100",
    date: "Wed 3:00pm",
    status: 0,
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
    isEmployer: true,
  },
];

interface IUserTableProps {
  showSearch?: boolean;
  hideShadow?: boolean;
}

export function UserTable({ hideShadow, showSearch }: IUserTableProps) {
  const location = useLocation();
  const path = location.pathname;
  const [title, setTitle] = React.useState<string>("");

  React.useEffect(() => {
    if (path === "/users") {
      setTitle("usuários");
    } else if (path === "/establishment/record") {
      setTitle("funcionários");
    }
  }, [path]);

  const filteredData = TABLE_ROWS.filter(item => {
    if (path === "/users") {
      return item.isEmployer === false;
    } else if (path === "/establishment/record") {
      return item.isEmployer === true;
    }
    return true;
  });

  return (
    <Card className="h-full w-full border rounded-md" shadow={!hideShadow}>
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              {title.replace(/^[a-z]/, match => match.toUpperCase())}{" "}
              cadastrados
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Aqui está detalhes dos {title} cadastrados
            </Typography>
          </div>
          {showSearch ? (
            <>
              <div className="flex w-full shrink-0 gap-2 md:w-max">
                <div className="w-full md:w-72">
                  {/* @ts-ignore */}
                  <Input
                    label="Buscar"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  />
                </div>
                <Button className="flex items-center gap-3" size="sm">
                  <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                  Baixar
                </Button>
              </div>
            </>
          ) : (
            <></>
          )}
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
            {filteredData.map(({ img, name, amount, date, status }, index) => {
              const isLast = index === filteredData.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={name}>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center">
                        <User size={28} strokeWidth={3} color="white" />
                      </div>
                      {/* <Avatar
                      src={img}
                      alt={name}
                      size="md"
                      className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    /> */}
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {name}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {amount}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center space-x-2">
                      {<UserTableChips status={status} />}
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="flex items-center gap-3">
                      <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          Natal / RN
                        </Typography>
                      </td>
                    </div>
                  </td>
                  <td className={classes}>
                    <EditMenuTable />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 p-4">
        <CircularPagination />
      </CardFooter>
    </Card>
  );
}
