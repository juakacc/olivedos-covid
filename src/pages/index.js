import React from "react"
import { Container, Box, Typography } from "@material-ui/core"

import Header from "../components/Header"
import peopleImg from "../../static/people.jpg"
import Footer from "../components/Footer"
import Link from "../components/Link"

export default () => {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box my={4} mt={10}>
          <Typography variant="h4" component="h1">
            Olivedos contra o Corona vírus
          </Typography>

          <Typography>O que deseja saber?</Typography>

          <Typography>
            <Link to="/sobre">Sobre a covid-19</Link>
          </Typography>

          <Typography>
            <Link to="/recomendacoes">O que devo fazer?</Link>
          </Typography>

          <Typography>
            <Link to="/numeros">Número de casos</Link>
          </Typography>

          <Typography>
            <Link to="/funcionamento">Funcionamento da instituição</Link>
          </Typography>

          <Typography>
            <Link to="/contato">Contato</Link>
          </Typography>

          <Typography>
            <Link to="/creditos">Sobre a plataforma</Link>
          </Typography>
        </Box>
        <img src={peopleImg} alt="Pessoas com máscara" />
      </Container>
      <Footer />
    </>
  )
}
