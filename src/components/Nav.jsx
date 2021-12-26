import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";

import Header from "./TopNav";
import SideBar from "./SideBar";
import MainContent from "./MainContent";

const Nav = () => {
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
    <div>
      <Header toggleOpen={toggleOpen} />
      <SideBar isOpen={isOpen} width={sideBarWidth} />
      <MainContent isOpen={isOpen} sideBarWidth={sideBarWidth}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore eum
        dicta recusandae inventore in iusto, architecto sunt excepturi quas
        nulla dignissimos beatae ut sint blanditiis repudiandae ipsa explicabo
        corporis, consequatur rem esse. Iusto maxime fugiat adipisci deleniti
        dolorem in molestiae odio debitis sunt cum aspernatur sed et cupiditate
        quibusdam laboriosam impedit soluta distinctio voluptates beatae laborum
        iste cumque, assumenda numquam. Dolor cumque reprehenderit officia ipsa
        veniam excepturi ipsam iusto ratione natus maxime tempore accusamus
        architecto vitae, tempora rem. Facere et harum, nisi repellendus
        repellat vero consequuntur autem veritatis ab deserunt sint eveniet
        cupiditate fugit soluta adipisci ex optio dolor facilis excepturi ipsam?
        Non maiores alias hic natus corrupti quo rerum, qui ea sint recusandae
        vel necessitatibus eveniet sapiente delectus. Aliquid pariatur iusto
        explicabo, recusandae nostrum, vitae voluptatem sunt ipsam voluptas
        cumque dolorum consectetur. Nesciunt doloribus labore fugiat neque saepe
        facere quidem. Voluptatem dolorum eveniet magnam quas, cumque a odio
        perferendis ab quia dolor distinctio, voluptas quo dolorem sapiente
        dolores commodi cum iste saepe consequuntur? Aperiam amet impedit velit.
        Libero vitae, ea necessitatibus perspiciatis impedit, corporis ratione
        quam, tempore itaque optio aliquam recusandae odio distinctio odit omnis
        sequi blanditiis non placeat soluta amet maiores minima. Magni inventore
        adipisci architecto aut distinctio.
      </MainContent>
    </div>
  );
};

export default Nav;
