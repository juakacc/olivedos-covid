import React from "react"
import Typography from "@material-ui/core/Typography"
import MuiLink from "@material-ui/core/Link"
import { Box, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 10,
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <MuiLink color="inherit" href="http://olivedos.pb.gov.br">
          Portal Olivedos
        </MuiLink>{" "}
        {new Date().getFullYear()}
      </Typography>
    </footer>
  )
}
