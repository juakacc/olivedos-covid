import React, { useState, useEffect } from "react"
import moment from "moment"
import {
  LineChart,
  CartesianGrid,
  XAxis,
  Label,
  YAxis,
  Line,
  LabelList,
  Brush,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

import Header from "../components/Header"
import { Box, Grid } from "@material-ui/core"
import Title from "../components/Title"
import Footer from "../components/Footer"

export default function Grafico() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://olivedos-covid.herokuapp.com/")
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch(err => {
        // set_oli_loaded(true)
        console.log(err)
      })
  }, [])

  return (
    <>
      <Header />
      <Box m={2}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Title title="Gráfico da COVID-19 em Olivedos/PB" />
          </Grid>

          <Grid item xs={12}>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={data} margin={{ right: 50 }}>
                <XAxis
                  dataKey="date"
                  tickFormatter={date => moment(date).format("DD/MM")}
                />
                <YAxis />

                <Tooltip
                  labelFormatter={date => moment(date).format("DD/MM")}
                />

                <Line
                  key="recovered"
                  dataKey="recovered"
                  name="Recuperados"
                  type="monotone"
                  stroke="#0f0"
                  strokeWidth={5}
                  strokeOpacity={1}
                >
                  <LabelList position="top" offset={10} dataKey="recovered" />
                </Line>

                <Line
                  key="confirmed"
                  dataKey="confirmed"
                  name="Confirmados"
                  type="monotone"
                  stroke="#f00"
                  strokeWidth={5}
                  strokeOpacity={1}
                >
                  <LabelList position="top" offset={10} dataKey="confirmed" />
                </Line>
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}
