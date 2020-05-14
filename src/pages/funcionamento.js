import React from "react"
import {
  Typography,
  Container,
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  makeStyles,
} from "@material-ui/core"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"

const useStyle = makeStyles(theme => ({
  table: {
    minWidth: 600,
  },
}))

export default function Sobre() {
  const classes = useStyle()

  const _contatos = [
    {
      nome: "José de Deus Aníbal Leonardo",
      funcao: "Prefeito",
      numero: "083 99400 5530",
    },
    {
      nome: "Suzélio Aníbal Leonardo",
      funcao: "Secretário",
      numero: "083 99315 3075",
    },
    {
      nome: "Genilson Galdino Fernandes",
      funcao: "Transportes",
      numero: "083 99351 3502",
    },
    {
      nome: "Christyan Gonçalves Aníbal",
      funcao: "Responsável pela folha de pagamento",
      numero: "083 99146 9197",
    },
    {
      nome: "Vitória Leonardo Guimarães Ferreira",
      funcao: "Tesoureira",
      numero: "83 99105 2133",
    },
    {
      nome: "Amanda de Figueiredo Pereira",
      funcao: "Jurídico",
      numero: "83 98867 7183",
    },
    {
      nome: "Helon Araújo de Azevedo Cruz",
      funcao: "Junta Militar",
      numero: "083 99309 8184",
    },
    {
      nome: "Jeff Silva de Araújo",
      funcao: "Atendimento à agricultores",
      numero: "083 99322 1904",
    },
  ]

  return (
    <>
      <Header />
      <Container maxWidth="md">
        <Box mt={10}>
          <Title title="Funcionamento durante a pandemia" />

          <Typography align="justify" paragraph>
            Os atendimentos presenciais da Secretaria de Administração,
            Finanças, Serviços Urbanos e Serviços Rurais serão precedidos de
            triagem conforme segue. Os interessados em atendimento pelo
            Secretário e demais funcionários destas secretarias deverão ligar
            para o telefone 83 99146-9197 ou solicitar por mensagem de texto o
            atendimento, relatando o assunto a ser tratado, o servidor
            solicitado e o número de telefone pessoal para o retorno da ligação
            para continuidade do atendimento.
          </Typography>

          <Typography align="justify" paragraph>
            O servidor responsável pela triagem dará as informações iniciais e
            agendará o atendimento virtual com o servidor solicitado, caso
            necessário, conforme cronograma de ligações. O servidor solicitado
            para o atendimento retornará a chamada no horário marcado e dará
            andamento ao atendimento e se for necessário, será marcado o
            atendimento presencial, também em dia e horário marcado.
          </Typography>

          <Typography align="justify" paragraph>
            Os atendimentos presenciais serão destinados às seguintes atividades
            e ocorrerão de 10h às 12h: Assinaturas e/ou retirada de
            requerimentos ou documentos diversos destas secretarias; Assinatura
            de recibos e retirada de cheques; Outras que surgirem e se fizerem
            necessário o atendimento presencial.
          </Typography>

          <Typography align="justify" paragraph>
            Caso o cidadão já saiba qual servidor trata do assunto que ele
            queira atendimento, e deseje ligar para ele diretamente, fica a
            lista de nomes e telefones à disposição do público, lembrando que a
            atendimento fica condicionado ao horário de 08h às 12h e das 14h às
            16h, horário em que fica disponível o sistema de atendimento
            virtual.
          </Typography>

          <Typography align="justify" paragraph>
            Cuidemos uns dos outros ficando em casa, é o melhor que podemos
            fazer no momento. Deus nos proteja.
          </Typography>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Nome</TableCell>
                  <TableCell align="center">Função</TableCell>
                  <TableCell align="center">Contato</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {_contatos.map(row => (
                  <TableRow key={row.name}>
                    <TableCell align="center">{row.nome}</TableCell>
                    <TableCell align="center">{row.funcao}</TableCell>
                    <TableCell align="center">{row.numero}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
