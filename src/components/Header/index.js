import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Menu,
  MenuItem,
  IconButton,
} from "@material-ui/core"
import { Helmet } from "react-helmet"

import MenuIcon from "@material-ui/icons/Menu"

import Link from "../Link"
import icon from "../../../static/virus.svg"
import useStyles from "./styles"

export default function Header() {
  const classes = useStyles()

  const [showMobileButton, setShowMobileMenu] = React.useState(null)
  const isMenuOpen = Boolean(showMobileButton)

  const _links = [
    {
      title: "Sobre",
      to: "/sobre",
    },
    {
      title: "Recomendações",
      to: "/recomendacoes",
    },
    {
      title: "Números",
      to: "/numeros",
    },
    {
      title: "Funcionamento",
      to: "/funcionamento",
    },
    {
      title: "Créditos",
      to: "/creditos",
    },
  ]

  const handleMenuClose = () => {
    setShowMobileMenu(null) // hide
  }

  const handleMenuOpen = event => {
    setShowMobileMenu(event.currentTarget) // show
  }

  const renderMobileMenu = (
    <Menu
      anchorEl={showMobileButton}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      {_links.map(link => (
        <MenuItem
          component={Link}
          to={link.to}
          key={link.to}
          onClick={handleMenuClose}
        >
          <p>{link.title}</p>
        </MenuItem>
      ))}
    </Menu>
  )

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Olivedos - COVID-19</title>
      </Helmet>

      <div className={classes.grow}>
        <AppBar position="sticky" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Avatar src={icon} className={classes.icon} />

            <Link to="/" className={classes.toolbarTitle}>
              <Typography variant="h6" color="textSecondary" noWrap>
                Olivedos contra a COVID-19
              </Typography>
            </Link>
            <Link to="/" className={classes.toolbarTitleSmall}>
              <Typography variant="h6" color="textSecondary" noWrap>
                Início
              </Typography>
            </Link>

            <div className={classes.grow} />

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="Mostrar mais"
                aria-haspopup="true"
                onClick={handleMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>

            <div className={classes.sectionDesktop}>
              <nav>
                {_links.map(link => (
                  <Link
                    key={link.to}
                    variant="button"
                    to={link.to}
                    color="textSecondary"
                    className={classes.link}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
      </div>
    </>
  )
}
