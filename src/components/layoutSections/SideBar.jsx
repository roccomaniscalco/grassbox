import {
  CatchingPokemon,
  GitHub,
  Mail,
  PersonRounded,
} from "@mui/icons-material";
import {
  Drawer,
  List,
  Box,
  styled,
  useMediaQuery,
  Typography,
  Divider,
} from "@mui/material";

import GrassboxIcon from "../../assets/GrassboxIcon.svg";
import ListItemLink from "./ListItemLink";

const HeaderOffset = styled(Box)(({ theme }) => theme.mixins.toolbar);

const SideBar = ({ isOpen, width, toggleOpen }) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <Drawer
      anchor="left"
      variant={isSmall ? "temporary" : "persistent"}
      open={isOpen}
      onClose={() => toggleOpen()}
    >
      <HeaderOffset display="flex" alignItems="center" paddingX={4}>
        <GrassboxIcon height={20} width={20} />
        <Box pl={3}>
          <Typography variant={"h6"}>GRASSBOX</Typography>
        </Box>
      </HeaderOffset>
      <Divider />
      <List sx={{ width: width }}>
        <ListItemLink
          Icon={GitHub}
          text="Github"
          href="https://github.com/roccomaniscalco"
        />
        <ListItemLink
          Icon={Mail}
          text="Inbox"
          href="https://outlook.office365.com/mail/inbox"
        />
        <ListItemLink
          Icon={CatchingPokemon}
          text="Pokédex"
          href="https://pokemondb.net/pokedex/national"
        />
        <ListItemLink
          Icon={PersonRounded}
          text="Users"
          href="/experimental/users"
        />
      </List>
    </Drawer>
  );
};

export default SideBar;
