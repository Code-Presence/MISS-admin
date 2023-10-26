import React from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { Plus, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MenuWithSearchInput } from "../../components/Collapse";
import { TransactionsTable } from "../../components/UserTable";

function Establishment(): JSX.Element {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate("/establishment/register");
  };

  return (
    <>
      <div className="w-full h-12 flex flex-row-reverse ">
        {/* <Button
          variant="text"
          className="flex items-center gap-3 ml-2"
          onClick={handlePress}
        >
          <Copy size={20} />
          Copiar link de cadastro
        </Button> */}

        <MenuWithSearchInput />

        <Button
          className="flex items-center gap-3 bg-purple mr-4"
          onClick={handlePress}
        >
          <Plus size={20} />
          Novo Estabelecimento
        </Button>
      </div>

      <div className="pt-6">
        <TransactionsTable />
      </div>
    </>
  );
}

export { Establishment };
