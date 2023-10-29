import React from "react";
import { Button, CardHeader, Chip, Typography } from "@material-tailwind/react";
import "./index.css";
import { UserTable } from "../../../components/UserTable/UserTable";
import { EstablishmentChips } from "./Components/EstablishmentChips";
import { catalog } from "../../../global/EstablishmentData";

function EstablishmentRecord(): JSX.Element {
  return (
    <>
      <div className="container">
        <div className="header">
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

        <div className="user-wrapper">
          <UserTable showSearch={false} hideShadow={true} />
        </div>
      </div>
    </>
  );
}

export { EstablishmentRecord };
