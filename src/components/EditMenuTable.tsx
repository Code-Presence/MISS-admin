import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { MoreVertical, PencilIcon } from "lucide-react";

function EditMenuTable() {
  return (
    <Menu>
      <MenuHandler>
        <IconButton className="bg-beauty-purple">
          <MoreVertical />
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
