import React from "react"
import { Typography } from "@material-ui/core"

export default function ({ title }) {
  return (
    <Typography variant="h4" component="h1" align="center" gutterBottom>
      {title}
    </Typography>
  )
}
