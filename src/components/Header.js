import React from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  makeStyles,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"

import icon from "../../static/virus.svg"

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: 20,
  },
}))

export default function Header() {
  const classes = useStyles()

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Avatar src={icon} mr={10} className={classes.icon} />
        {/* <IconButton
          edge="start"
          //   className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">Olivedos contra a Covid-19</Typography>
        <Button color="inherit" className="">
          Login
        </Button>
      </Toolbar>
    </AppBar>
  )
}
