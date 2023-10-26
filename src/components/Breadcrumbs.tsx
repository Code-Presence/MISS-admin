import { ChevronRight } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

// Remove the import for 'styled-components'.

interface BreadcrumbProps {
  title?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ title }) => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(path => path);

  if (paths.length === 0) {
    return null;
  }

  const breadcrumbs = paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join("/")}`;
    const title = path.charAt(0).toUpperCase() + path.slice(1);

    const isLast = index === paths.length - 1;
    const color = isLast ? "text-black" : "text-gray-900";
    const weight = isLast ? "font-semibold" : "font-regular";

    if (location.pathname === "/dashboard") {
      return null;
    }

    return (
      <li key={url} className="flex items-center justify-center w-fit">
        <i className={color}>/</i>
        <Link to={url} className="text-decoration-none pl-1">
          {" "}
          <p
            className={`${color} ${weight} text-sm hover:bg-purple-light px-1 rounded-sm`}
          >
            {title.replace(/-/g, " ")}
          </p>
        </Link>
      </li>
    );
  });

  return (
    <>
      <ol className="flex flex-row items-center justify-center rounded-sm list-none ">
        <li className="breadcrumb-item hover:bg-purple-light px-2">
          <Link
            to="/dashboard"
            className={`text-decoration-none ${
              location.pathname === "/dashboard"
                ? "text-black font-semibold"
                : "text-black font-regular"
            } text-sm`}
          >
            Dashboard
          </Link>
        </li>
        {breadcrumbs}
      </ol>
    </>
  );
};

export { Breadcrumb };
