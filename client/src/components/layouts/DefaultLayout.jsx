import { useMediaQuery } from "@mui/material"
import { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../common/navigation/Header"
import MainContent from "../common/navigation/MainContent"
import SideBar from "../common/navigation/SideBar"

const DefaultLayout = () => {
  const sideBarWidth = "15rem"
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("md"))
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    if (isSmall) setIsOpen((previousIsOpen) => !previousIsOpen)
  }

  useEffect(() => {
    if (isSmall) setIsOpen(false)
    if (!isSmall) setIsOpen(true)
  }, [isSmall, setIsOpen])

  return (
    <>
      <Header toggleOpen={toggleOpen} />
      <SideBar isOpen={isOpen} width={sideBarWidth} toggleOpen={toggleOpen} />
      <MainContent isOpen={isOpen} sideBarWidth={sideBarWidth}>
        <Outlet />
      </MainContent>
    </>
  )
}

export default DefaultLayout
