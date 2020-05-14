import React from "react"
import { Typography, Box, Grid } from "@material-ui/core"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"
import DadoCard from "../components/DadoCard"

import olivedos from "../../static/olivedos.png"
import paraiba from "../../static/paraiba.png"
import brasil from "../../static/brasil.png"

export default function Sobre() {
  return (
    <>
      <Header />
      <Box mt={10} m={2}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title title="Números atuais da COVID-19" />
          </Grid>

          <Grid item xs={12} md={4}>
            <DadoCard image={olivedos} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DadoCard image={paraiba} />
          </Grid>
          <Grid item xs={12} md={4}>
            <DadoCard image={brasil} />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <Typography align="right">(Fonte: Ministério da Saúde)</Typography>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}
