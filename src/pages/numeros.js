import React, { useEffect, useState } from "react"
import { Typography, Box, Grid } from "@material-ui/core"
import { navigate } from "gatsby"

import Header from "../components/Header"
import Footer from "../components/Footer"
import Title from "../components/Title"
import DadoCard from "../components/DadoCard"
import Spinning from "../components/Spinning"

import olivedos from "../../static/olivedos.png"
import paraiba from "../../static/paraiba.png"
import brasil from "../../static/brasil.png"
import Axios from "axios"

export default function Numeros() {
  const [brazil, setBrazil] = useState({})
  const [pb, setPb] = useState({})
  const [oli, setOli] = useState({})

  const [brazil_loaded, set_brazil_loaded] = useState(false)
  const [pb_loaded, set_pb_loaded] = useState(false)
  const [oli_loaded, set_oli_loaded] = useState(false)

  const getBrazil = () => {
    set_brazil_loaded(false)

    Axios.get("https://disease.sh/v3/covid-19/countries/brazil")
      .then(res => {
        const { cases, active, deaths, recovered, updated } = res.data

        setBrazil({
          title: "Brasil",
          confirmed: cases,
          cases: active,
          deaths,
          recovered,
          updated_at: updated,
        })
        set_brazil_loaded(true)
      })
      .catch(() => {
        Axios.get("https://covid19-brazil-api.now.sh/api/report/v1/brazil")
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
          .catch(() => {
            set_brazil_loaded(false)
          })
      })
  }

  const getPb = () => {
    set_pb_loaded(false)

    Axios.get("https://olivedoscovid.xyz/pb/current")
      .then(res => {
        const { confirmed, deaths, active, recovered, date } = res.data

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
        Axios.get(
          "https://brasil.io/api/dataset/covid19/caso/data/?is_last=True&city_ibge_code=25"
        )
          .then(res => {
            const { confirmed, deaths, date } = res.data.results[0]

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
          .catch(() => {
            set_pb_loaded(false)
          })
      })
  }

  const getOli = () => {
    set_oli_loaded(false)

    Axios.get("https://olivedoscovid.xyz/current")
      .then(res => {
        const {
          confirmed,
          deaths,
          date,
          suspect,
          discarded,
          monitored,
          recovered,
        } = res.data

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
      .catch(() => {
        set_oli_loaded(false)
      })
  }

  useEffect(() => {
    getOli()
    getPb()
    getBrazil()
  }, [])

  const handleClick = () => {
    navigate("/grafico")
  }

  return (
    <>
      <Header />
      <Box m={2}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title title="Números atuais da COVID-19" />
          </Grid>
          <>
            <Grid item xs={12} sm={6} md={4}>
              {oli_loaded ? (
                <div
                  onClick={handleClick}
                  onKeyDown={handleClick}
                  role="button"
                  tabIndex={0}
                >
                  <DadoCard image={olivedos} data={oli} isOlivedos={true} />
                </div>
              ) : (
                <Spinning />
              )}
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              {pb_loaded ? (
                <DadoCard image={paraiba} data={pb} isOlivedos={false} />
              ) : (
                <Spinning />
              )}
            </Grid>

            <Grid item xs={12} sm={6} md={4}>
              {brazil_loaded ? (
                <DadoCard image={brasil} data={brazil} isOlivedos={false} />
              ) : (
                <Spinning />
              )}
            </Grid>
          </>
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
