import React from "react"
import { Typography, makeStyles, Link } from "@material-ui/core"

import CreateIcon from "@material-ui/icons/Create"
import FavoriteIcon from "@material-ui/icons/Favorite"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 10,
    padding: theme.spacing(3, 2),
    backgroundColor: "#B9DED9",
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textPrimary" align="center">
        {"Copyright © "}
        <Link color="textPrimary" href="http://olivedos.pb.gov.br">
          Portal Olivedos
        </Link>{" "}
        {new Date().getFullYear()}
      </Typography>

      <Typography align="center">
        <CreateIcon />
        com
        <FavoriteIcon />
      </Typography>
    </footer>
  )
}
