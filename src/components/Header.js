import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  makeStyles,
} from "@material-ui/core"

import Link from "../components/Link"
import icon from "../../static/virus.svg"
import { Helmet } from "react-helmet"

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  icon: {
    marginRight: 10,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Olivedos - COVID-19</title>
      </Helmet>

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Avatar src={icon} className={classes.icon} />
          <Link to="/" className={classes.toolbarTitle}>
            <Typography variant="h6" color="textPrimary" noWrap>
              Olivedos contra a COVID-19
            </Typography>
          </Link>

          <nav>
            <Link
              variant="button"
              to="/sobre"
              color="textPrimary"
              className={classes.link}
            >
              Sobre
            </Link>
            <Link
              variant="button"
              to="/recomendacoes"
              color="textPrimary"
              className={classes.link}
            >
              Recomendações
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/numeros"
              className={classes.link}
            >
              Números
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/funcionamento"
              className={classes.link}
            >
              Funcionamento
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/contato"
              className={classes.link}
            >
              Contato
            </Link>
            <Link
              variant="button"
              color="textPrimary"
              to="/creditos"
              className={classes.link}
            >
              Créditos
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    </>
  )
}
