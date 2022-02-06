import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Tooltip as MuiToolTip,
  tooltipClasses,
  useMediaQuery,
} from "@mui/material"
import { elementType, string } from "prop-types"
import { Link } from "react-router-dom"

const Tooltip = styled(({ className, ...props }) => (
  <MuiToolTip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.body2.fontSize,
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.divider}`,
  },
}))

const ListItemLink = ({ href, Icon, text }) => {
  const isMini = useMediaQuery((theme) => theme.breakpoints.down("lg"))

  if (isMini)
    return (
      <ListItem sx={{ px: 1.5 }}>
        <ListItemButton
          component={Link}
          to={href}
          sx={{ borderRadius: 2, p: 0 }}
        >
          <Tooltip title={text} placement="right">
            <ListItemIcon sx={{ minWidth: 0, p: 1.5 }}>
              <Icon fontSize="small" />
            </ListItemIcon>
          </Tooltip>
        </ListItemButton>
      </ListItem>
    )
  return (
    <ListItem sx={{ px: 2 }}>
      <ListItemButton
        component={Link}
        to={href}
        sx={{ borderRadius: 2, py: 1, px: 2 }}
      >
        <ListItemIcon sx={{ minWidth: 0 }}>
          <Icon fontSize="small" />
        </ListItemIcon>
        <ListItemText sx={{ pl: 2 }} primary={text} />
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
