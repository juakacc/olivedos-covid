import React from "react"
import { Container, Box, Typography } from "@material-ui/core"
import Header from "../components/Header"

import peopleImg from "../../static/people.jpg"
import Footer from "../components/Footer"

export default () => {
  return (
    <>
      <Header />
      <Container maxWidth="sm">
        <Box my={4} mt={10}>
          <Typography variant="h4" component="h1" gutterBottom>
            Olivedos contra o Corona vírus
          </Typography>
          <Typography>O que deseja saber?</Typography>

          <Typography>Sobre a covid-19</Typography>
          <Typography>O que devo fazer?</Typography>
          <Typography>Número de casos</Typography>
          <Typography>Funcionamento da instituição</Typography>
          <Typography>Contato</Typography>
          <Typography>Sobre a plataforma</Typography>

          {/* <Link to="/about" color="secondary">
          Go to the about page
        </Link> */}
          {/* <ProTip /> */}
          {/* <Copyright /> */}
        </Box>
        <img src={peopleImg} alt="Pessoas com máscara" />
      </Container>
      <Footer />
    </>
  )
}
