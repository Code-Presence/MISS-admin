import React, { ReactNode } from "react";
import {
  LayoutDashboard,
  BarChart3,
  UserCircle,
  Warehouse,
  Boxes,
  Package,
  Receipt,
  Settings,
  LifeBuoy,
} from "lucide-react";
import { Squares2X2Icon } from "@heroicons/react/solid";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import { Routes, useLocation, Route } from "react-router-dom";
import { Dash } from "../../pages/Dashboard/DashboardFrame";
import RedirectComponent from "../RedirectComponent";
import { Establishment } from "../../pages/Establishment/Establishment";
import { Register } from "../../pages/Establishment/components/Register";
import { Breadcrumbs } from "@material-tailwind/react";
import { Breadcrumb } from "../Breadcrumbs";
interface IDashboardProps {
  children?: ReactNode;
}

function Dashboard({ children }: IDashboardProps): JSX.Element {
  return (
    <div className="w-full h-screen flex bg-background">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          path="/dashboard"
        />
        <SidebarItem
          icon={<Warehouse size={20} />}
          text="Estabelecimentos"
          path="establishment"
        />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItem icon={<Package size={20} />} text="Orders" />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
      </Sidebar>
      <div className="flex flex-col w-full ">
        <nav className="w-full h-16 bg-slate-300 flex items-center pl-6">
          <Breadcrumb />
        </nav>
        <div className="p-6 w-full h-full">
          <Routes>
            <Route path="/" element={<RedirectComponent />} />
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/establishment" element={<Establishment />} />
            <Route path="/establishment/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
