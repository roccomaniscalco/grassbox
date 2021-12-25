import { styled } from "@mui/system";
import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";

const ListItemLinkButton = styled(ListItemButton)(({ theme }) => ({
  name: "ListItemLinkButton",
  borderRadius: 10,
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    margin: 0,
  },
}));

const ListItemLink = ({ href, Icon, text }) => {
  return (
    <ListItem >
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
