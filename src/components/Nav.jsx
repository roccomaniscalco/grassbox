import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const Nav = () => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen(!isOpen);
    console.log(isOpen);
  }

  useEffect(() => {
    if (isSmall) setIsOpen(false);
  }, [isSmall, setIsOpen]);

  return (
    <div>
      <TopNav toggleOpen={isSmall && toggleOpen} />
      <SideNav isOpen={!isSmall || isOpen} />
    </div>
  );
};

export default Nav;
