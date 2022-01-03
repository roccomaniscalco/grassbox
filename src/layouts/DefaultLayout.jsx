import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../components/layoutSections/Header";
import MainContent from "../components/layoutSections/MainContent";
import SideBar from "../components/layoutSections/SideBar";

const DefaultLayout = ({ children }) => {
  const sideBarWidth = "15rem";
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    if (isSmall) setIsOpen((previousIsOpen) => !previousIsOpen);
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
