import { Box, styled } from "@mui/material";

const MainContentContainer = styled("main", {
  shouldForwardProp: (prop) => prop !== "isOpen" && prop !== "sideBarWidth",
})(({ theme, isOpen, sideBarWidth }) => ({
  width: isOpen ? `calc(100% - ${sideBarWidth})` : "100%",
  transition: theme.transitions.create("width", {
    ...(isOpen
      ? {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }
      : {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
  }),
}));

const MainContent = ({ isOpen, sideBarWidth, children }) => {
  return (
    <Box display="flex" justifyContent="flex-end" overflow="hidden">
      <MainContentContainer isOpen={isOpen} sideBarWidth={sideBarWidth}>
        {children}
      </MainContentContainer>
    </Box>
  );
};

export default MainContent;
