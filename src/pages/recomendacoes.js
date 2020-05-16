import React from "react"
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core"
import LabelIcon from "@material-ui/icons/Label"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"

import usomascara from "../../static/usomascara.jpg"
import distanciamento from "../../static/distanciamento.jpg"

const useStyles = makeStyles(theme => ({
  bold: {
    fontWeight: 700,
    color: "red",
  },
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

  const _recomendacoes = [
    "Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%;",
    "Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos;",
    "Evite tocar olhos, nariz e boca com as mãos não lavadas;",
    "Ao tocar, lave sempre as mãos como já indicado;",
    "Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando;",
    "Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto :);",
    "Higienize com frequência o celular e os brinquedos das crianças;",
    "Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos;",
    "Mantenha os ambientes limpos e bem ventilados;",
    "Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas. Se puder, fique em casa;",
    "Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos, e fique em casa até melhorar;",
    "Durma bem e tenha uma alimentação saudável;",
    "Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência.",
  ]

  const _positivo = [
    "Fique em isolamento domiciliar.",
    "Utilize máscara o tempo todo.",
    "Se for preciso cozinhar, use máscara de proteção, cobrindo boca e nariz todo o tempo.",
    "Depois de usar o banheiro, nunca deixe de lavar as mãos com água e sabão e sempre limpe vaso, pia e demais superfícies com álcool ou água sanitária para desinfecção do ambiente.",
    "Separe toalhas de banho, garfos, facas, colheres, copos e outros objetos apenas para seu uso.",
    "O lixo produzido precisa ser separado e descartado.",
    "Sofás e cadeiras também não podem ser compartilhados e precisam ser limpos frequentemente com água sanitária ou álcool 70%.",
    "Mantenha a janela aberta para circulação de ar do ambiente usado para isolamento e a porta fechada, limpe a maçaneta frequentemente com álcool 70% ou água sanitária.",
  ]

  const _positivo_comp = [
    "Manter a distância mínima de 1 metro entre o paciente e os demais moradores.",
    "Limpe os móveis da casa frequentemente com água sanitária ou álcool 70%.",
    "Se uma pessoa da casa tiver diagnóstico positivo, todos os moradores ficam em isolamento por 14 dias também.",
    "Caso outro familiar da casa também inicie os sintomas leves, ele deve reiniciar o isolamento de 14 dias. Se os sintomas forem graves, como dificuldade para respirar, ele deve procurar orientação médica.",
  ]

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box mt={2}>
          <Title title="Recomendações" />

          <Typography>
            Recomendações da OMS para evitar a transmissão da COVID-19:
          </Typography>

          <img
            src={usomascara}
            alt="Uso correto da máscara"
            className={classes.image}
          />

          <List dense>
            {_recomendacoes.map(item => (
              <ListItem key={Math.random()}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <img
            src={distanciamento}
            alt="Distanciamento social é essencial"
            className={classes.image}
          />

          <Typography variant="h5" component="h2" gutterBottom>
            O que fazer em caso do surgimento de alguns sintomas?
          </Typography>

          <Typography paragraph>
            Caso você se sinta doente, com sintomas de gripe, evite contato
            físico com outras pessoas, principalmente idosos e doentes crônicos
            e fique em casa por 14 dias.
          </Typography>

          <Typography className={classes.bold} paragraph>
            Só procure um hospital de referência se estiver com falta de ar.
          </Typography>

          <Typography>
            Em caso de diagnóstico positivo para COVID-19, siga as seguintes
            recomendações:
          </Typography>

          <List dense>
            {_positivo.map(item => (
              <ListItem key={Math.random()}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography>
            Caso o paciente não more sozinho, os demais moradores da devem
            dormir em outro cômodo, longe da pessoa infectada, seguindo também
            as seguintes recomendações:
          </Typography>

          <List dense>
            {_positivo_comp.map(item => (
              <ListItem key={Math.random()}>
                <ListItemIcon>
                  <LabelIcon />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography align="right">(Fonte: Ministério da Saúde)</Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
