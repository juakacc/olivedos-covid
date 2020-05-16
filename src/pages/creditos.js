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

import fim_quarentena from "../../static/fim_quarentena.jpg"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  paperButton: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}))

export default function Sobre() {
  const classes = useStyles()

  return (
    <>
      <Header />
      <Box m={2}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Title title="Olivedos contra a COVID-19" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography align="center">
              Desenvolvido por Joaquim, buscando ajudar a população olivedense
              de forma simples e direta.
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper className={classes.paperButton}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<GitHubIcon />}
                href="https://github.com/juakacc/olivedos-covid"
              >
                Repositório
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography color="textPrimary">
                Sugestões? É só enviar um e-mail para{" "}
                <Link href="mailto:juakacc@gmail.com">
                  juakacc arroba gmail ponto com
                </Link>
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={6} className={classes.container}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12}>
                <Typography variant="h6" color="textPrimary" align="center">
                  Agradecimentos
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography color="textPrimary">
                    Fonte de dados:{" "}
                    <Link
                      href="https://brasil.io/dataset/covid19/caso_full/"
                      color="primary"
                    >
                      Brasil.io
                    </Link>
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography color="textPrimary">
                    Fonte de dados:{" "}
                    <Link
                      href="https://covid19-brazil-api-docs.now.sh/"
                      color="primary"
                    >
                      Covid19 Brazil API
                    </Link>
                  </Typography>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography color="textPrimary">
                    Fonte para material gráfico:{" "}
                    <Link href="http://www.freepik.com" color="primary">
                      Freepik
                    </Link>
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6}>
            <img
              src={fim_quarentena}
              alt="O tão esperado fim da pandemia"
              className={classes.image}
            />
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}
