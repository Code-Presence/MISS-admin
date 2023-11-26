import React from "react";
import { Button, CardHeader, Chip, Typography } from "@material-tailwind/react";
import { UserTable } from "../../../components/UserTable/UserTable";
import { EstablishmentChips } from "./Components/EstablishmentChips";
import { catalog } from "../../../global/EstablishmentData";
import statisticsChartsData from "../../../global/statistics-charts-data";
import { StatisticsChart } from "../../../components";
import { ClockIcon } from "lucide-react";
import { container, wrapper } from "./styles";
import { useParams } from "react-router-dom";

interface IEstablishmentProps {
  id: string;
  name: string;
  document: string;
  phone: string;
  rate?: string;
  address: {
    line1: string;
    line2?: string;
    line3?: string;
    postalCode: string;
    neighborhood?: string;
    state: string;
  };
  createdBy?: string;
  foundedAt?: Date;
}

function EstablishmentRecord(): JSX.Element {

  const [establishment, setEstablishment] = React.useState<IEstablishmentProps | null>(null);

  const { id } = useParams();

  // React.useEffect(() => {
  //   fetch(`http://localhost:3001/establishments/${id}`)
  //     .then(response => response.json())
  //     // .then(data => setEstablishment(data))
  //     .then((data) => {
  //       setEstablishment(data), 
  //       console.log('auuu: ', establishment)
  //     })
  //     .catch(error => console.error('Erro ao buscar estabelecimento:', error));
  // }, []);

  // React.useEffect(() => {
  //   fetch('http://localhost:3001/establishments/655523d7d8759e04b5435a44')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`Erro HTTP: status ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((response) => 
  //     {setEstablishment(response),
  //     console.log(establishment)
  //   }
  //     )
  //     .catch(error => console.error('Erro ao buscar estabelecimento:', error));
  // }, []);
  
  React.useEffect(() => {
    fetch(`http://localhost:3001/establishments/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Erro HTTP: status ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Dados recebidos:', data);
        setEstablishment(data);
      })
      .catch(error => console.error('Erro ao buscar estabelecimento:', error));
  }, []);
  

  return (
    <>
      <div className={`${container}`}>
        <div className={`${wrapper}`}>
          <div className="h-48 w-48 bg-gray-200 rounded-sm" />
          <div className="h-full rounded-sm">
            <Typography variant="small">Estabelecimento:</Typography>
            <Typography variant="h4">
            {establishment ? establishment.name : "Carregando..."}
            </Typography>
            <div className="w-full flex gap-2">
              <EstablishmentChips />
            </div>
            <Typography variant="small" className="my-2">
              Oferece:
            </Typography>
            <div className="grid gap-y-2 gap-x-2 xl:grid-cols-3">
              {catalog.map(item => (
                // @ts-ignore
                <Chip variant="ghost" color={item.color} value={item.label} />
              ))}
            </div>
          </div>
        </div>

        <div className={`pt-8 flex justify-between gap-4`}>
          {statisticsChartsData.map(props => (
            <StatisticsChart
              key={props.title}
              {...props}
              footer={
                <Typography
                  variant="small"
                  className="flex items-center font-normal text-blue-gray-600"
                >
                  <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
                  &nbsp;{props.footer}
                </Typography>
              }
            />
          ))}
        </div>

        <div className="user-wrapper">
          <UserTable showSearch={false} hideShadow={true} />
        </div>
      </div>
    </>
  );
}

export { EstablishmentRecord };
