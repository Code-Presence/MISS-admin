import React from "react";
import { Chip } from "@material-tailwind/react";

interface IUserTableChipsProps {
  status: number;
}

function UserTableChips({ status }: IUserTableChipsProps): JSX.Element {
  return (
    <>
      {status == 1 ? (
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
        </>
      ) : (
        <>
          <Chip
            variant="ghost"
            color="red"
            size="sm"
            value="Inativo"
            icon={
              <span className="mx-auto mt-1 block h-2 w-2 rounded-full bg-red-900 content-['']" />
            }
          />
        </>
      )}
    </>
  );
}

export { UserTableChips };
