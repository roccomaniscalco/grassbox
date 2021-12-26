import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import Header from "../components/TopNav";
import SideBar from "../components/SideBar";
import MainContent from "../components/MainContent";

const DefaultLayout = ({ children }) => {
  const sideBarWidth = "15rem";
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (isSmall) setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isSmall) setIsOpen(false);
    if (!isSmall) setIsOpen(true);
  }, [isSmall, setIsOpen]);

  return (
    <>
      <Header toggleOpen={toggleOpen} />
      <SideBar isOpen={isOpen} width={sideBarWidth} />
      <MainContent isOpen={isOpen} sideBarWidth={sideBarWidth}>
        {children}
      </MainContent>
    </>
  );
};

export default DefaultLayout;
