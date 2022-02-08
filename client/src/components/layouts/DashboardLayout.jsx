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
  Drawer,
  List,
  styled,
  useMediaQuery,
} from "@mui/material"
import { Outlet } from "react-router-dom"
import Header from "../common/navigation/Header"
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

const HeaderOffset = styled(Box)(({ theme }) => theme.mixins.toolbar)

const DashboardLayout = () => {
  const isOpen = useMediaQuery((theme) => theme.breakpoints.up("md"))

  return (
    <>
      <Sidebar variant="permanent" isOpen={isOpen}>
        <HeaderOffset />
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
      <Box pt={3} ml={isOpen ? `${openWidth}px` : `${closedWidth}px`}>
        <Header />
        <HeaderOffset />
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </>
  )
}

export default DashboardLayout
