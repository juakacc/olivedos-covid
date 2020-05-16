import React from "react"
import { Typography, Container, Box } from "@material-ui/core"
import MoodBadIcon from "@material-ui/icons/MoodBad"

import Header from "../components/Header"
import Footer from "../components/Footer"

export default function Sobre() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box mt={2}>
          <Typography align="center">Página não encontrada</Typography>
          <Typography align="center">
            <MoodBadIcon fontSize="large" />
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
