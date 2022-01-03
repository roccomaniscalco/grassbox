import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
} from "@mui/material";
import { elementType, string } from "prop-types";

const ListItemLinkButton = styled(ListItemButton)({
  name: "ListItemLinkButton",
  borderRadius: 10,
});

const ListItemLink = ({ href, Icon, text }) => {
  return (
    <ListItem>
      <ListItemLinkButton component={Link} href={href}>
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemLinkButton>
    </ListItem>
  );
};

ListItemLink.propTypes = {
  href: string.isRequired,
  Icon: elementType,
  text: string.isRequired,
};

export default ListItemLink;
