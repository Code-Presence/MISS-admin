import { Chip } from "@material-tailwind/react";
import React from "react";

function EstablishmentChips(): JSX.Element {
  return (
    <>
      <Chip
        variant="ghost"
        color="green"
        size="sm"
        value="Ativo"
        icon={
          <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-green-900 content-['']" />
        }
      />
      <Chip variant="ghost" color="orange" size="sm" value="Salão de beleza" />
    </>
  );
}

export { EstablishmentChips };
