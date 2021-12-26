import { CatchingPokemon, GitHub, Mail } from "@mui/icons-material";
import { Drawer, List } from "@mui/material";
import ListItemLink from "./ListItemLink";

const SideBar = ({ isOpen, width }) => {
  return (
    <Drawer anchor="left" variant="persistent" open={isOpen}>
      <List sx={{ width: width, marginTop: "70px" }}>
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

export default SideBar;
