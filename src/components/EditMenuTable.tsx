import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { PencilIcon } from "lucide-react";

function EditMenuTable() {
  return (
    <Menu>
      <MenuHandler>
        <IconButton className="bg-purple">
          <PencilIcon className="h-4 w-4" />
        </IconButton>
      </MenuHandler>
      <MenuList>
        <MenuItem>Menu Item 1</MenuItem>
        <MenuItem>Menu Item 2</MenuItem>
        <MenuItem>Menu Item 3</MenuItem>
      </MenuList>
    </Menu>
  );
}

export { EditMenuTable };
