import React from "react"
import { Typography, Container, Box } from "@material-ui/core"
import MoodBadIcon from "@material-ui/icons/MoodBad"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "../components/Link"

export default function Sobre() {
  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box mt={10}>
          <Typography>Página não encontrada</Typography>
          <MoodBadIcon fontSize="large" />
          <Link to="/" variant="outline">
            Início
          </Link>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
