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

  const [email, setEmail] = React.useState("");
  const onChange = ({ target }: any) => setEmail(target.value);

  return (
    <>
      <Menu
        placement="bottom-start"
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
            size="md"
            type="email"
            label="Email"
            value={email}
            onChange={onChange}
            className="pr-20 w-72"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            size="sm"
            color={email ? "gray" : "blue-gray"}
            disabled={!email}
            className="!absolute right-4 top-4 rounded"
          >
            Convidar
          </Button>

          <hr className="my-3" />

          <Button
            className={`${bgColor} flex items-center gap-3 w-72 mt-4`}
            size="md"
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
