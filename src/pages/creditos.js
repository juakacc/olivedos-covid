import React from "react"
import {
  Typography,
  Box,
  Link,
  Button,
  Grid,
  Paper,
  makeStyles,
} from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}))

export default function Sobre() {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Box mt={10} m={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Title title="Olivedos contra a COVID-19" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography>
              Desenvolvido por Joaquim, buscando ajudar a população de forma
              simples e direta.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHubIcon />}
              href="https://github.com/juakacc/olivedos-covid"
            >
              Repositório
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography color="textPrimary">
                Sugestões? É só enviar um e-mail para{" "}
                <Link href="mailto:juakacc@gmail.com">juakacc@gmail.com</Link>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography color="textPrimary">
                Fonte para material gráfico:{" "}
                <Link href="http://www.freepik.com" color="primary">
                  Designed by Freepik
                </Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}
