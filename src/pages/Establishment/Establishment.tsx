import React from "react";
import { ButtonGroup, Button } from "@material-tailwind/react";
import { Plus, Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Establishment(): JSX.Element {
  const navigate = useNavigate();

  const handlePress = () => {
    navigate("/establishment/register");
  };

  return (
    <>
      <div className="w-full h-12 flex flex-row-reverse ">
        <Button
          variant="text"
          className="flex items-center gap-3 ml-2"
          onClick={handlePress}
        >
          <Copy size={20} />
          Copiar link de cadastro
        </Button>

        <Button
          className="flex items-center gap-3 bg-purple"
          onClick={handlePress}
        >
          <Plus size={20} />
          Novo Estabelecimento
        </Button>
      </div>
    </>
  );
}

export { Establishment };
