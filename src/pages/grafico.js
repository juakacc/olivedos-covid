import React, { useState, useEffect } from "react"
import moment from "moment"
import {
  LineChart,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Line,
  Label,
} from "recharts"
import { Box, Grid, Typography } from "@material-ui/core"

import Header from "../components/Header"
import Title from "../components/Title"
import Footer from "../components/Footer"
import "./grafico.css"

export default function Grafico() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://olivedoscovid.xyz?page=0&limit=500")
      .then(res => res.json())
      .then(res => {
        setData(res)
      })
      .catch(err => {
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
            <div className="container-chart-scroll">
              <div className="container-chart">
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={data} margin={{ right: 50 }}>
                    <XAxis
                      dataKey="date"
                      tickFormatter={date => moment(date).format("DD/MM")}
                    />
                    <YAxis>
                      <Label
                        position="insideLeft"
                        value="Número de casos"
                        angle={-90}
                      />
                    </YAxis>

                    <Tooltip
                      labelFormatter={date => moment(date).format("DD/MM")}
                    />

                    <Line
                      key="recovered"
                      dataKey="recovered"
                      name="Recuperados"
                      stroke="#0f0"
                      type="monotone"
                      dot={false}
                      strokeWidth={5}
                      strokeOpacity={1}
                    />

                    <Line
                      key="confirmed"
                      dataKey="confirmed"
                      name="Confirmados"
                      stroke="#f00"
                      type="monotone"
                      dot={false}
                      strokeWidth={5}
                      strokeOpacity={1}
                    />

                    <Line
                      key="deaths"
                      dataKey="deaths"
                      name="Vítimas fatais"
                      stroke="#8e44ad"
                      type="monotone"
                      dot={false}
                      strokeWidth={5}
                      strokeOpacity={1}
                    />

                    <Legend
                      verticalAlign="top"
                      align="center"
                      iconType="square"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div className="show-tip-scroll">
              <p>Arraste para o lado &rArr; &rArr; &rArr;</p>
            </div>
            <Typography align="center">(Fonte: Secretaria de Saúde)</Typography>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}
