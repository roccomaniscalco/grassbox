import {
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const ListItemLink = ({ href, Icon, text }) => {
  return (
    <ListItem dense>
      <ListItemButton
        component={Link}
        href={href}
        sx={{ borderRadius: "10px" }}
      >
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemLink;
