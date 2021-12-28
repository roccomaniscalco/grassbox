import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import Header from "../components/layoutSections/TopNav";
import SideBar from "../components/layoutSections/SideBar";
import MainContent from "../components/layoutSections/MainContent";

const DefaultLayout = ({ children }) => {
  const sideBarWidth = "15rem";
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
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
      <SideBar isOpen={isOpen} width={sideBarWidth} toggleOpen={toggleOpen} />
      <MainContent isOpen={isOpen} sideBarWidth={sideBarWidth}>
        {children}
      </MainContent>
    </>
  );
};

export default DefaultLayout;
