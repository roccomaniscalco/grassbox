import {
  CloudRounded,
  GitHub,
  HomeRounded,
  PersonRounded,
} from "@mui/icons-material"
import { Box, Drawer, List, styled, useMediaQuery } from "@mui/material"
import { bool, string } from "prop-types"
import ListItemLink from "./ListItemLink"

const HeaderOffset = styled(Box)(({ theme }) => theme.mixins.toolbar)

const SideBar = ({ isOpen, width }) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"))

  return (
    <Drawer
      anchor="left"
      variant={isSmall ? "temporary" : "persistent"}
      open={isOpen}
    >
      {/* Header */}
      <HeaderOffset />
      {/* Content */}
      <List sx={{ width: width }} dense>
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
        <ListItemLink Icon={GitHub} text="Github" href="/experimental/github" />
      </List>
    </Drawer>
  )
}

SideBar.propTypes = {
  isOpen: bool.isRequired,
  width: string.isRequired,
}

export default SideBar
