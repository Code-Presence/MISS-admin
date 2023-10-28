import { Typography } from "@material-tailwind/react";
import React from "react";

function EstablishmentRecord(): JSX.Element {
  return (
    <>
      <div className="w-full h-full animate-fade-in-down rounded-lg shadow-lg bg-white p-4 border border-border-gray">
        <div className="w-full h-48 rounded-md p-4 border flex gap-4">
          <div className="h-full w-40 bg-gray-200 rounded-sm" />
          <div className="h-full w-40 bg-gray-200 rounded-sm">
            <Typography variant="h4">hue</Typography>
          </div>
        </div>
      </div>
    </>
  );
}

export { EstablishmentRecord };
