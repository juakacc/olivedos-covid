import React from "react"
import { Typography, makeStyles, Link } from "@material-ui/core"
import FavoriteIcon from "@material-ui/icons/Favorite"

const useStyles = makeStyles(theme => ({
  footer: {
    marginTop: 10,
    padding: theme.spacing(3, 2),
    backgroundColor: "#B9DED9",
  },
  icon: {
    height: 10,
  },
}))

export default function Footer() {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Typography variant="body2" color="textPrimary" align="center">
        {"© 2020 "}
        <Link color="textPrimary" href="http://olivedos.pb.gov.br">
          Prefeitura Municipal de Olivedos
        </Link>
      </Typography>

      <Typography variant="body2" align="center">
        Desenvolvido com <FavoriteIcon fontSize="inherit" />. Viva ao software
        livre
      </Typography>
    </footer>
  )
}
