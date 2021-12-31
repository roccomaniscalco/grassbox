import { Box } from "@mui/material";
import EditWidgetContainer from "../components/common/EditWidgetContainer";
import WeatherWidget from "../components/widgets/weather/WeatherWidget";

const Index = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      padding={4}
    >
      <EditWidgetContainer>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas, eos
        doloribus? Dolores, natus provident architecto sit inventore accusantium
        facilis voluptate deleniti ducimus molestias, ullam quod vero itaque,
        officiis harum eaque enim laborum distinctio consectetur neque adipisci
        voluptates? Ea hic dolore quis sapiente velit dolorum consequuntur ullam
        repellendus, praesentium reiciendis tempora iste, voluptatibus ipsum,
        exercitationem vitae a voluptate omnis quidem! Porro tempore dicta illo
        voluptas, ut quibusdam cumque enim fugit consequuntur, quaerat ipsa
        facilis itaque, dolores explicabo perspiciatis ipsum eaque ratione.
        Assumenda, quae? Voluptatem odio, sit corporis illum quia necessitatibus
        placeat quaerat odit aut nemo tempore eos voluptate sed quo ad.
      </EditWidgetContainer>
      <WeatherWidget />
    </Box>
  );
};

export default Index;
