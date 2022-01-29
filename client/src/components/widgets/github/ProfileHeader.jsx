import { Skeleton, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import api from "../../../hooks/api"
import { useGithubContext } from "../../contexts/GithubContext"
import ProfileInput from "./ProfileInput"

const ProfileHeader = () => {
  const { username, year } = useGithubContext()
  const { activity, error } = api.useGithubActivity(username, year)

  if (error) return null

  return (
    <Box
      px={2}
      py={1}
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      gap={2}
    >
      <Box>
        <ProfileInput />
      </Box>
      <Typography variant="body2" color="textSecondary" noWrap>
        {activity ? (
          <>
            <strong>
              {activity.contributionCount}{" "}
              {activity.contributionCount === 1
                ? "contribution"
                : "contributions"}
            </strong>{" "}
            in {activity.year === "current" ? "the last year" : year}
          </>
        ) : (
          <Skeleton width="200px" />
        )}
      </Typography>
    </Box>
  )
}

export default ProfileHeader
