import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/system";

const ListItemLinkButton = styled(ListItemButton)(({ theme }) => ({
  borderRadius: 10,
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
}));

const ListItemLink = ({ href, Icon, text }) => {
  return (
    <ListItem disablePadding>
      <ListItemLinkButton component={Link} href={href}>
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemLinkButton>
    </ListItem>
  );
};

export default ListItemLink;
