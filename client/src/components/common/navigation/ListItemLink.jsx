import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
import { elementType, string } from "prop-types"
import { Link as RouterLink } from "react-router-dom"

const ListItemLink = ({ href, Icon, text }) => {
  return (
    <ListItem>
      <ListItemButton component={RouterLink} to={href} sx={{ borderRadius: 2 }}>
        <ListItemIcon>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

ListItemLink.propTypes = {
  href: string.isRequired,
  Icon: elementType,
  text: string.isRequired,
}

export default ListItemLink
