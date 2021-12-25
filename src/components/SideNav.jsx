import { CatchingPokemon, GitHub, Mail } from "@mui/icons-material";
import { Drawer, Grid, List } from "@mui/material";
import ListItemLink from "./ListItemLink";

const SideNav = () => {
  return (
    <Drawer anchor="left" variant="persistent" open>
      <Grid container direction="column" gap="1rem">
        <Grid item>
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
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default SideNav;
