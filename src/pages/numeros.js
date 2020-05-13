import React from "react"
import { Typography, Container, Box } from "@material-ui/core"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Sobre() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box mt={10}>
          <Typography>Números atuais da COVID-19</Typography>
          <Typography>Numeros.</Typography>

          <Typography>(Fonte: Ministério da Saúde)</Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
