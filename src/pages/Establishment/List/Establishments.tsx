import React, { useState } from "react";
import { ButtonGroup, Button, Alert } from "@material-tailwind/react";
import { Plus, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MenuWithSearchInput } from "../../../components/Collapse";
import { EstablishmentTable } from "../../../components/EstablishmentTable";

function Establishment(): JSX.Element {
  const navigate = useNavigate();
  const handlePress = () => {
    navigate("/establishment/register");
  };

  return (
    <>
      <div className="w-full h-12 flex flex-row-reverse animate-fade-in-down">
        <MenuWithSearchInput />

        <Button
          className="flex items-center gap-3 bg-beauty-purple mr-4"
          onClick={handlePress}
        >
          <Plus size={20} />
          Novo Estabelecimento
        </Button>
      </div>

      <div className="pt-6 animate-fade-in-down">
        <EstablishmentTable />
      </div>
    </>
  );
}

export { Establishment };
