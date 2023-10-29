import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  Input,
} from "@material-tailwind/react";
import { Copy, Mail, Check } from "lucide-react";
import React, { useState } from "react";

export function MenuWithSearchInput() {
  const [copy, setCopy] = useState<boolean>(false);

  const handleCopyToClipboard = () => {
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  };

  const bgColor = copy ? "bg-beauty-green" : "bg-beauty-green-light";

  return (
    <>
      <Menu
        dismiss={{
          itemPress: false,
        }}
      >
        <MenuHandler>
          <Button variant="text">Link de cadastro</Button>
        </MenuHandler>
        <MenuList>
          {/* @ts-ignore */}
          <Input
            size="lg"
            label="Enviar por email"
            icon={<Mail size={14} />}
            className="w-72"
          />

          <Button
            className={`${bgColor} flex items-center gap-3 w-72 mt-4`}
            size="lg"
            onClick={handleCopyToClipboard}
          >
            {copy ? (
              <>
                <Check size={20} strokeWidth={3} />
                <p className="">COPIADO</p>
              </>
            ) : (
              <>
                <Copy size={20} strokeWidth={3} />
                <p className="">Copiar Link de cadastro</p>
              </>
            )}
          </Button>
        </MenuList>
      </Menu>
    </>
  );
}
