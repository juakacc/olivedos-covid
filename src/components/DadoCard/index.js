import React from "react"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core"
import moment from "moment"

import ItemCard from "../ItemCard"
import useStyles from "./styles"

function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
}

export default function DadoCard({ image, data, isOlivedos }) {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={data.title}
          height="140"
          image={image}
          title="Entidade"
        />
        <CardContent>
          <Typography gutterBottom variant="h4" component="h2">
            {data.title}
          </Typography>

          {isOlivedos ? (
            <>
              <Typography variant="body2" align="center">
                Clique para visualizar o gráfico
              </Typography>
            </>
          ) : null}

          <div className={classes.cases}>
            <ItemCard
              title="Casos"
              value={`${formatNumber(data.confirmed)}${isOlivedos ? " *" : ""}`}
            />
          </div>
          {isOlivedos ? (
            <>
              <Typography variant="body2" align="center">
                * O número de casos inclui todos os que foram diagnosticados no
                município.
              </Typography>
              <div className={classes.suspect}>
                <ItemCard
                  title="Suspeitos"
                  value={formatNumber(data.suspect)}
                />
              </div>
              <div className={classes.monitored}>
                <ItemCard
                  title="Monitorados"
                  value={formatNumber(data.monitored)}
                />
              </div>
              <div className={classes.descarded}>
                <ItemCard
                  title="Descartados"
                  value={formatNumber(data.discarded)}
                />
              </div>
            </>
          ) : (
            <>
              <div className={classes.sem}>
                <ItemCard title="Ativos" value={formatNumber(data.cases)} />
              </div>
            </>
          )}
          <div className={classes.recovered}>
            <ItemCard
              title="Recuperados"
              value={formatNumber(data.recovered)}
            />
          </div>
          <div className={classes.deaths}>
            <ItemCard
              title="Vítimas fatais"
              value={formatNumber(data.deaths)}
            />
          </div>
          <div className={classes.date}>
            <ItemCard
              title="Atualizado em"
              value={moment(data.updated_at).format("DD/MM/yyyy")}
              align="right"
            />
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
