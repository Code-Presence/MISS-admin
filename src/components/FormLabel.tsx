import React from "react";
import { Tooltip, Typography } from "@material-tailwind/react";
import { Asterisk } from "lucide-react";

interface IFormLabelProps {
  content: string;
  isMandatory?: boolean;
}

function FormLabel({ content, isMandatory }: IFormLabelProps): JSX.Element {
  return (
    <>
      {isMandatory ? (
        <Tooltip
          content="Campo obrigatório"
          placement="left-start"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium flex hover:cursor-pointer"
          >
            {content}
            {isMandatory ? (
              <>
                <Asterisk size={12} />
              </>
            ) : (
              <></>
            )}
          </Typography>
        </Tooltip>
      ) : (
        <Typography
          variant="small"
          color="blue-gray"
          className="mb-2 font-medium flex"
        >
          {content}
          {isMandatory ? (
            <>
              <Asterisk size={12} />
            </>
          ) : (
            <></>
          )}
        </Typography>
      )}
    </>
  );
}

export { FormLabel };
