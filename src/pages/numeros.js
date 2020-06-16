import React, { useEffect, useState } from "react"
import { Typography, Box, Grid, makeStyles } from "@material-ui/core"
import { WindMillLoading } from "react-loadingg"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"
import DadoCard from "../components/DadoCard"

import olivedos from "../../static/olivedos.png"
import paraiba from "../../static/paraiba.png"
import brasil from "../../static/brasil.png"

const styles = makeStyles(theme => ({
  container: {
    minHeight: 400,
  },
}))

export default function Numeros() {
  const [brazil, setBrazil] = useState({})
  const [pb, setPb] = useState({})
  const [oli, setOli] = useState({})

  const [brazil_loaded, set_brazil_loaded] = useState(false)
  const [pb_loaded, set_pb_loaded] = useState(false)
  const [oli_loaded, set_oli_loaded] = useState(false)

  const classes = styles()

  const getBrazil = () => {
    set_brazil_loaded(false)
    fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
      .then(res => res.json())
      .then(res => {
        const { cases, confirmed, deaths, recovered, updated_at } = res.data

        setBrazil({
          title: "Brasil",
          confirmed,
          cases,
          deaths,
          recovered,
          updated_at,
        })
        set_brazil_loaded(true)
      })
      .catch(err => {
        set_brazil_loaded(true)
        console.log(err)
      })
  }

  const getPb = () => {
    set_pb_loaded(false)
    fetch("https://olivedos-covid.herokuapp.com/pb/current")
      .then(res => res.json())
      .then(res => {
        const { confirmed, deaths, active, recovered, date } = res

        setPb({
          title: "Paraíba",
          confirmed,
          cases: active,
          deaths,
          recovered,
          updated_at: date,
        })
        set_pb_loaded(true)
      })
      .catch(() => {
        fetch(
          "https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&city_ibge_code=25"
        )
          .then(res => res.json())
          .then(res => {
            const { confirmed, deaths, date } = res.results[0]

            setPb({
              title: "Paraíba",
              confirmed,
              cases: "Sem informação",
              deaths,
              recovered: "Sem informação",
              updated_at: date,
            })
            set_pb_loaded(true)
          })
          .catch(err => {
            set_pb_loaded(true)
            console.log(err)
          })
      })
  }

  const getOli = () => {
    set_oli_loaded(false)
    fetch("https://olivedos-covid.herokuapp.com/current")
      .then(res => res.json())
      .then(res => {
        const {
          confirmed,
          deaths,
          date,
          suspect,
          discarded,
          monitored,
          recovered,
        } = res

        setOli({
          title: "Olivedos",
          confirmed,
          deaths,
          updated_at: date,
          suspect,
          discarded,
          monitored,
          recovered,
        })
        set_oli_loaded(true)
      })
      .catch(err => {
        set_oli_loaded(true)
        console.log(err)
      })
  }

  useEffect(() => {
    getOli()
    getPb()
    getBrazil()
  }, [])

  return (
    <>
      <Header />
      <Box m={2}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title title="Números atuais da COVID-19" />
          </Grid>

          {!(brazil_loaded && pb_loaded && oli_loaded) ? (
            <div className={classes.container}>
              <WindMillLoading size="small" />
            </div>
          ) : (
            <>
              <Grid item xs={12} sm={6} md={4}>
                <DadoCard image={olivedos} data={oli} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <DadoCard image={paraiba} data={pb} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <DadoCard image={brasil} data={brazil} />
              </Grid>
            </>
          )}
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
