import React, { ReactNode } from "react";
import {
  LayoutDashboard,
  BarChart3,
  UserCircle,
  Boxes,
  Package,
  Receipt,
  Settings,
  LifeBuoy,
} from "lucide-react";
import Sidebar, { SidebarItem } from "../Sidebar/Sidebar";
import { Routes, useLocation, Route } from "react-router-dom";

interface IDashboardProps {
  children?: ReactNode;
}

function Dashboard({ children }: IDashboardProps): JSX.Element {
  return (
    <div className="w-full h-screen flex">
      <Sidebar>
        <SidebarItem
          icon={<LayoutDashboard size={20} />}
          text="Dashboard"
          path="/dashboard"
        />
        <SidebarItem icon={<BarChart3 size={20} />} text="Users" path="user" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItem icon={<Package size={20} />} text="Orders" />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
      </Sidebar>
      <div className="flex flex-col w-full ">
        <nav className="w-full h-16 bg-slate-300 flex items-center pl-6">
          <h1>hue</h1>
        </nav>
        <div className="p-6">
          <Routes>
            <Route path="/home" element={<h1>home</h1>} />
            <Route path="/dashboard" element={<h1>dash</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
