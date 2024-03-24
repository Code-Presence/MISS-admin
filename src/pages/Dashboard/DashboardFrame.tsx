import React from "react";
import "./index.css";
import { HighlightContainer } from "./components/HighlightContainer";
import { statisticsCardsData } from "../../global/statistics-cards-data";
import { Typography } from "@material-tailwind/react";

function Dash(): JSX.Element {
  return (
      <>
      <div className="highlights-wrapper animate-fade-in-down">
      {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
            <HighlightContainer
            key={title}
            {...rest}
            title={title}
            icon={React.createElement(icon, {
className: "w-6 h-6 text-white",
})}
            footer={
            <Typography className="font-normal text-blue-gray-600">
            <strong className={footer.color}>{footer.value}</strong>
            &nbsp;{footer.label}
            </Typography>
            }
            />
            ))}
      </div>
      </>
  );
  }

export { Dash };
