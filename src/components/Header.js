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
    alignItems: "center",
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
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "inline",
    },
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
            <Typography variant="h6" color="textSecondary" noWrap>
              Olivedos contra a COVID-19
            </Typography>
          </Link>

          <nav>
            <Link
              variant="button"
              to="/sobre"
              color="textSecondary"
              className={classes.link}
            >
              Sobre
            </Link>
            <Link
              variant="button"
              to="/recomendacoes"
              color="textSecondary"
              className={classes.link}
            >
              Recomendações
            </Link>
            <Link
              variant="button"
              color="textSecondary"
              to="/numeros"
              className={classes.link}
            >
              Números
            </Link>
            <Link
              variant="button"
              color="textSecondary"
              to="/funcionamento"
              className={classes.link}
            >
              Funcionamento
            </Link>
            <Link
              variant="button"
              color="textSecondary"
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
