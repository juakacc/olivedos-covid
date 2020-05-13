import React from "react"
import {
  Typography,
  Container,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"

export default function Sobre() {
  const recomendacoes = [
    "Lave com frequência as mãos até a altura dos punhos, com água e sabão, ou então higienize com álcool em gel 70%",
    "Ao tossir ou espirrar, cubra nariz e boca com lenço ou com o braço, e não com as mãos",
    "Evite tocar olhos, nariz e boca com as mãos não lavadas",
    "Ao tocar, lave sempre as mãos como já indicado",
    "Mantenha uma distância mínima de cerca de 2 metros de qualquer pessoa tossindo ou espirrando",
    "Evite abraços, beijos e apertos de mãos. Adote um comportamento amigável sem contato físico, mas sempre com um sorriso no rosto :)",
    "Higienize com frequência o celular e os brinquedos das crianças",
    "Não compartilhe objetos de uso pessoal, como talheres, toalhas, pratos e copos",
    "Mantenha os ambientes limpos e bem ventilados",
    "Evite circulação desnecessária nas ruas, estádios, teatros, shoppings, shows, cinemas e igrejas. Se puder, fique em casa",
    "Se estiver doente, evite contato físico com outras pessoas, principalmente idosos e doentes crônicos, e fique em casa até melhorar",
    "Durma bem e tenha uma alimentação saudável",
    "Utilize máscaras caseiras ou artesanais feitas de tecido em situações de saída de sua residência",
  ]

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box mt={10}>
          <Title title="Recomendações" />

          <List dense>
            {recomendacoes.map(item => (
              <ListItem key={Math.random()}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>

          <Typography variant="h5" component="h2" gutterBottom>
            O que é o coronavírus?
          </Typography>

          <Typography align="right" color="textSecondary">
            (Fonte: Ministério da Saúde)
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
