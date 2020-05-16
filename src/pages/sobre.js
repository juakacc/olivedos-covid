import React from "react"
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  makeStyles,
} from "@material-ui/core"
import LabelIcon from "@material-ui/icons/Label"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"
import Link from "../components/Link"

import limpeza from "../../static/limpeza.jpg"

const useStyles = makeStyles(theme => ({
  image: {
    display: "block",
    margin: "auto",
    maxWidth: "100%",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "70%",
    },
  },
}))

export default function Sobre() {
  const classes = useStyles()

  const _transmissao = [
    "Toque do aperto de mão;",
    "Gotículas de saliva;",
    "Espirro;",
    "Tosse;",
    "Catarro;",
    "Objetos ou superfícies contaminadas, como celulares, mesas, maçanetas, brinquedos, teclados de computador etc.",
  ]

  const _sintomas = [
    "Tosse",
    "Febre",
    "Coriza",
    "Dor de garganta",
    "Dificuldade para respirar",
  ]

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box mt={2}>
          <Title title="O que é COVID-19?" />

          <Typography align="justify" gutterBottom paragraph>
            A COVID-19 é uma doença causada pelo coronavírus SARS-CoV-2, que
            apresenta um quadro clínico que varia de infecções assintomáticas a
            quadros respiratórios graves. De acordo com a Organização Mundial de
            Saúde (OMS), a maioria dos pacientes com COVID-19 (cerca de 80%)
            podem ser assintomáticos e cerca de 20% dos casos podem requerer
            atendimento hospitalar por apresentarem dificuldade respiratória e
            desses casos aproximadamente 5% podem necessitar de suporte para o
            tratamento de insuficiência respiratória (suporte ventilatório).
          </Typography>

          <Typography variant="h5" component="h2" gutterBottom>
            O que é o coronavírus?
          </Typography>

          <Typography align="justify" gutterBottom paragraph>
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

          <img
            src={limpeza}
            alt="Limpeza é essencial"
            className={classes.image}
          />

          <Typography variant="h5" component="h2" gutterBottom>
            Transmissão
          </Typography>

          <Typography align="justify" gutterBottom paragraph>
            A transmissão acontece de uma pessoa doente para outra ou por
            contato próximo por meio de:
          </Typography>

          <List dense>
            {_transmissao.map(item => (
              <ListItem key={Math.random()}>
                <ListItemAvatar>
                  <LabelIcon />
                </ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h5" component="h2" gutterBottom>
            Sintomas
          </Typography>

          <Typography align="justify" gutterBottom paragraph>
            Os sintomas da COVID-19 podem variar de um simples resfriado até uma
            pneumonia severa. Sendo os sintomas mais comuns:
          </Typography>

          <List dense>
            {_sintomas.map(item => (
              <ListItem key={Math.random()}>
                <ListItemAvatar>
                  <LabelIcon />
                </ListItemAvatar>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography>
            Pode ser interessante:{" "}
            <Link to="/recomendacoes">O que eu devo fazer?</Link>
          </Typography>

          <Typography align="right">(Fonte: Ministério da Saúde)</Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
