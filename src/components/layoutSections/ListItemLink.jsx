import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import Link from "next/link";
import { elementType, string } from "prop-types";

const ListItemLink = ({ href, Icon, text }) => {
  return (
    <ListItem>
      <Link href={href} passHref>
        <ListItemButton component="a" sx={{ borderRadius: 2 }}>
          <ListItemIcon>
            <Icon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary={text} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};

ListItemLink.propTypes = {
  href: string.isRequired,
  Icon: elementType,
  text: string.isRequired,
};

export default ListItemLink;
