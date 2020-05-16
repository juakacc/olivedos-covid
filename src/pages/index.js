import React from "react"
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core"

import Header from "../components/Header"
import peopleImg from "../../static/people.jpg"
import Footer from "../components/Footer"
import Title from "../components/Title"
import Link from "../components/Link"

function ListItemLink(props) {
  return <ListItem button component={Link} {...props} />
}

const useStyles = makeStyles(theme => ({
  img: {
    display: "block",
    margin: "auto",
    maxHeight: "300px",
    maxWidth: "100%",
  },
}))

export default () => {
  const classes = useStyles()

  const _menu = [
    {
      title: "Sobre a COVID-19",
      link: "/sobre",
    },
    {
      title: "O que devo fazer?",
      link: "/recomendacoes",
    },
    {
      title: "Número de casos",
      link: "/numeros",
    },
    {
      title: "Funcionamento da instituição",
      link: "/funcionamento",
    },
    {
      title: "Sobre a Plataforma",
      link: "/creditos",
    },
  ]

  return (
    <>
      <Header />
      <Box m={2}>
        <Grid container>
          <Grid item xs={12}>
            <Title title="Olivedos contra o Corona vírus" />
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography align="center">O que deseja saber?</Typography>
            <List component="nav" aria-label="Menu de opções">
              {_menu.map(item => (
                <ListItemLink to={item.link} key={item.link}>
                  <ListItemText primary={item.title} />
                </ListItemLink>
              ))}
            </List>
          </Grid>

          <Grid item xs={12} sm={8}>
            <img
              src={peopleImg}
              alt="Pessoas com máscara"
              className={classes.img}
            />
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  )
}
