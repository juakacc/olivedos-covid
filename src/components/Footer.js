import React from "react"
import Typography from "@material-ui/core/Typography"
import MuiLink from "@material-ui/core/Link"

export default function Footer() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MuiLink color="inherit" href="http://olivedos.pb.gov.br">
        Portal Olivedos
      </MuiLink>{" "}
      {new Date().getFullYear()}
    </Typography>
  )
}
