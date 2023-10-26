import {
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Copy, Mail } from "lucide-react";

export function MenuWithSearchInput() {
  return (
    <Menu
      dismiss={{
        itemPress: false,
      }}
    >
      <MenuHandler>
        <Button variant="text">Link de cadastro</Button>
      </MenuHandler>
      <MenuList>
        <Input
          size="lg"
          label="Enviar por email"
          icon={<Mail size={14} />}
          className="w-72"
        />

        <Button
          className="bg-green flex items-center gap-3 w-full mt-4"
          size="lg"
        >
          <Copy size={14} />
          <p className="">Copiar Link de cadastro</p>
        </Button>
      </MenuList>
    </Menu>
  );
}
