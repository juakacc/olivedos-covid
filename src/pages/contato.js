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
          <Typography>Formas de contato</Typography>
          <Typography>
            A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que
            apresenta um quadro clínico que varia de infecções assintomáticas a
            quadros respiratórios graves. De acordo com a Organização Mundial de
            Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%)
            podem ser assintomáticos e cerca de 20% dos casos podem requerer
            atendimento hospitalar por apresentarem dificuldade respiratória e
            desses casos aproximadamente 5% podem necessitar de suporte para o
            tratamento de insuficiência respiratória (suporte ventilatório).
          </Typography>
          <Typography>O que é o coronavírus?</Typography>
          <Typography>
            Coronavírus é uma família de vírus que causam infecções
            respiratórias. O novo agente do coronavírus foi descoberto em
            31/12/19 após casos registrados na China. Provoca a doença chamada
            de coronavírus (COVID-19). Os primeiros coronavírus humanos foram
            isolados pela primeira vez em 1937. No entanto, foi em 1965 que o
            vírus foi descrito como coronavírus, em decorrência do perfil na
            microscopia, parecendo uma coroa. A maioria das pessoas se infecta
            com os coronavírus comuns ao longo da vida, sendo as crianças
            pequenas mais propensas a se infectarem com o tipo mais comum do
            vírus. Os coronavírus mais comuns que infectam humanos são o alpha
            coronavírus 229E e NL63 e beta coronavírus OC43, HKU1.
          </Typography>

          <Typography>(Fonte: Ministério da Saúde)</Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}