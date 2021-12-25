import { CatchingPokemon, GitHub, Mail } from "@mui/icons-material";
import { Divider, Drawer, List, Typography } from "@mui/material";
import ListItemLink from "./ListItemLink";
import GrassboxIcon from ".././assets/GrassboxIcon.svg";
import { Box } from "@mui/system";


const SideNav = () => {
  return (
    <Drawer anchor="left" variant="persistent">
      <Box display="flex" alignItems="center" gap="1rem" sx={{ paddingX: 4 }}>
        <GrassboxIcon style={{ height: "4rem" }} />
        <Typography variant={"h5"}>grassbox</Typography>
      </Box>
      <Divider />

      <List>
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
      </List>
    </Drawer>
  );
};

export default SideNav;
