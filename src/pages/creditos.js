import React from "react"
import { Typography, Container, Box, Link } from "@material-ui/core"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Sobre() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box mt={10}>
          <Typography>Sobre a plataforma</Typography>
          <Typography>Desenvolvido gratuitamente por Joaquim Aníbal</Typography>
          {/* <Link></Link> */}

          <Typography>Font de gráficos: </Typography>
          <Link href="http://www.freepik.com" color="primary">
            Designed by Freepik
          </Link>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
