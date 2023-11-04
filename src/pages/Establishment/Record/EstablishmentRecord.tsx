import React from "react";
import { Button, CardHeader, Chip, Typography } from "@material-tailwind/react";
import { UserTable } from "../../../components/UserTable/UserTable";
import { EstablishmentChips } from "./Components/EstablishmentChips";
import { catalog } from "../../../global/EstablishmentData";
import statisticsChartsData from "../../../global/statistics-charts-data";
import { StatisticsChart } from "../../../components";
import { ClockIcon } from "lucide-react";
import { container, wrapper } from "./styles";

function EstablishmentRecord(): JSX.Element {
  return (
    <>
      <div className={`${container}`}>
        <div className={`${wrapper}`}>
          <div className="h-48 w-48 bg-gray-200 rounded-sm" />
          <div className="h-full rounded-sm">
            <Typography variant="small">Estabelecimento:</Typography>
            <Typography variant="h4">RC Hair</Typography>
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
