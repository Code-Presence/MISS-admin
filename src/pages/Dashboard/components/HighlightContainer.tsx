import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

interface IHighlightContainer {
  title: string;
  color: any;
  icon: any;
  value: any;
  footer: any;
}

function HighlightContainer({
  title,
  color,
  icon,
  value,
  footer,
}: IHighlightContainer): JSX.Element {
  return (
    <>
      <Card>
        <CardHeader
          variant="gradient"
          color={color}
          className="absolute -mt-4 grid h-16 w-16 place-items-center"
        >
          {icon}
        </CardHeader>
        <CardBody className="p-4 text-right">
          <Typography
            variant="small"
            className="font-normal text-blue-gray-600"
          >
            {title}
          </Typography>
          <Typography variant="h4" color="blue-gray">
            {value}
          </Typography>
        </CardBody>
        {footer && (
          <CardFooter className="border-t border-blue-gray-50 p-4">
            {footer}
          </CardFooter>
        )}
      </Card>
    </>
  );
}

export { HighlightContainer };
