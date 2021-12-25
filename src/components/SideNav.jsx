import { CatchingPokemon, GitHub, Mail } from "@mui/icons-material";
import { Drawer, List } from "@mui/material";
import ListItemLink from "./ListItemLink";

const SideNav = ({ isOpen }) => {
  return (
    <Drawer anchor="left" variant="persistent" open={isOpen}>
      <List dense sx={{ width: "15rem", marginTop: "70px" }}>
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
