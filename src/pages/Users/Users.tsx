import React from "react";
import { Button } from "@material-tailwind/react";
import { Plus, UserPlus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UserTable } from "../../components/UserTable";

function Users(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full h-full animate-fade-in-down">
        <div className="w-full h-12 flex flex-row-reverse ">
          <Button
            className="flex items-center gap-3 bg-purple mr-4"
            onClick={() => navigate("/user/register")}
          >
            <UserPlus size={20} />
            Novo Usuário
          </Button>
        </div>

        <div className="mt-6">
          <UserTable />
        </div>
      </div>
    </>
  );
}

export { Users };
