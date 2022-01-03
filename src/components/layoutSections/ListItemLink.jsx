import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled
} from "@mui/material";

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

export default ListItemLink;
