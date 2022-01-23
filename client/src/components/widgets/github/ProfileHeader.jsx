import { Box } from "@mui/system"
import React from "react"
import ProfileInput from "./ProfileInput"

const ProfileHeader = () => {
  return (
    <Box px={2} py={1}>
      <ProfileInput />
    </Box>
  )
}

export default ProfileHeader
