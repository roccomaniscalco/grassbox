import {
  CloudRounded,
  GitHub,
  HomeRounded,
  PersonRounded,
  TranslateRounded,
} from "@mui/icons-material"
import {
  Box,
  Container,
  Divider,
  Drawer,
  List,
  styled,
  useMediaQuery,
} from "@mui/material"
import { Outlet } from "react-router-dom"
import ListItemLink from "../common/navigation/ListItemLink"

const openWidth = 200
const closedWidth = 68

const openedMixin = (theme) => ({
  width: openWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
})

const closedMixin = (theme) => ({
  width: closedWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
})

const Sidebar = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isOpen",
})(({ theme, isOpen }) => ({
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(isOpen && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!isOpen && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}))

const SideBarHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}))

const DashboardLayout = () => {
  const isOpen = useMediaQuery((theme) => theme.breakpoints.up("lg"))

  return (
    <Box>
      <Sidebar variant="permanent" isOpen={isOpen}>
        <SideBarHeader />
        <Divider />
        <List sx={{ pt: 2.5 }} dense>
          <ListItemLink Icon={HomeRounded} text="Dashboard" href="/" />
          <ListItemLink
            Icon={PersonRounded}
            text="Users"
            href="/experimental/users"
          />
          <ListItemLink
            Icon={CloudRounded}
            text="Weather"
            href="/experimental/weather"
          />
          <ListItemLink
            Icon={GitHub}
            text="Github"
            href="/experimental/github"
          />
          <ListItemLink
            Icon={TranslateRounded}
            text="Japanese"
            href="/experimental/japanese"
          />
        </List>
      </Sidebar>

      <Box ml={isOpen ? `${openWidth}px` : `${closedWidth}px`}>
        <SideBarHeader />
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}

export default DashboardLayout
