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
          <Typography>
            Funcionamento da instituição durante a pandemia
          </Typography>
          <Typography>
            Os atendimentos presenciais da Secretaria de Administração,
            Finanças, Serviços Urbanos e Serviços Rurais serão precedidos de
            triagem conforme segue. Os interessados em atendimento pelo
            Secretário e demais funcionários destas secretarias deverão ligar
            para o telefone 83 99146-9197 ou solicitar por mensagem de texto o
            atendimento, relatando o assunto a ser tratado, o servidor
            solicitado e o número de telefone pessoal para o retorno da ligação
            para continuidade do atendimento. O servidor responsável pela
            triagem dará as informações iniciais e agendará o atendimento
            virtual com o servidor solicitado, caso necessário, conforme
            cronograma de ligações. O servidor solicitado para o atendimento
            retornará a chamada no horário marcado e dará andamento ao
            atendimento e se for necessário, será marcado o atendimento
            presencial, também em dia e horário marcado. Os atendimentos
            presenciais serão destinados às seguintes atividades e ocorrerão de
            10h às 12h: Assinaturas e/ou retirada de requerimentos ou documentos
            diversos destas secretarias; Assinatura de recibos e retirada de
            cheques; Outras que surgirem e se fizerem necessário o atendimento
            presencial. Caso o cidadão já saiba qual servidor trata do assunto
            que ele queira atendimento, e deseje ligar para ele diretamente,
            fica a lista de nomes e telefones à disposição do público, lembrando
            que a atendimento fica condicionado ao horário de 08h às 12h e das
            14h às 16h, horário em que fica disponível o sistema de atendimento
            virtual. José de Deus Aníbal Leonardo – Prefeito – 83 99400 5530
            Suzélio Aníbal Leonardo – Secretário – 83 99315 3075 Genilson
            Galdino Fernandes – Transportes - 83 99351-3502 Christyan Gonçalves
            Aníbal – Responsável pela folha de pagamento – 83 991469197 Vitória
            Leonardo Guimarães Ferreira – Tesoureira – 83 99105-2133 Amanda de
            Figueiredo Pereira – Jurídico - 83 98867-7183 Helon Araújo de
            Azevedo Cruz – Junta Militar - 83 99309-8184 Jeff Silva de Araújo –
            Atendimento à agricultores - 83 99322-1904 Cuidemos uns dos outros
            ficando em casa, é o melhor que podemos fazer no momento. Deus nos
            proteja.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  )
}
