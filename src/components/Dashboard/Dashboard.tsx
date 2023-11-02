import React from "react";
import { LayoutDashboard, Warehouse, User } from "lucide-react";

import { Breadcrumbs, RedirectComponent, Sidebar, SidebarItem } from "../index";

import { Routes, Route } from "react-router-dom";

import {
  Dash,
  Users,
  UserRegister,
  Establishment,
  EstablishmentRecord,
  EstablishmentRegister,
} from "../../pages";

function Dashboard(): JSX.Element {
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
          path="establishments"
        />
        <SidebarItem icon={<User size={20} />} text="Usuários" path="users" />
      </Sidebar>
      <div className="flex flex-col w-full ">
        <nav className="w-full h-16 flex items-center pl-6 bg-white border">
          <Breadcrumbs />
        </nav>
        <div className="p-6 w-full h-full">
          <Routes>
            <Route path="/" element={<RedirectComponent />} />
            <Route path="/dashboard" element={<Dash />} />
            <Route path="/establishments" element={<Establishment />} />
            <Route
              path="/establishment/register"
              element={<EstablishmentRegister />}
            />
            <Route
              path="/establishment/record"
              element={<EstablishmentRecord />}
            />

            <Route path="/users" element={<Users />} />
            <Route path="/user/register" element={<UserRegister />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export { Dashboard };
