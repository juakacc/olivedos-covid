import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import moment from "moment"

import ItemCard from "../components/ItemCard"

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

export default function ImgMediaCard({ image, data }) {
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
          <ItemCard title="Casos" value={data.confirmed} />

          {data.title === "Olivedos" ? (
            <>
              <ItemCard title="Suspeitos" value={data.suspect} />
              <ItemCard title="Descartados" value={data.discarded} />
              <ItemCard title="Monitorados" value={data.monitored} />
            </>
          ) : (
            <>
              <ItemCard title="Ativos" value={data.cases} />
              <ItemCard title="Recuperados" value={data.recovered} />
            </>
          )}
          <ItemCard title="Vítimas fatais" value={data.deaths} />
          <ItemCard
            title="Atualizado em"
            value={moment(data.updated_at).format("DD/MM/yyyy")}
            align="right"
          />
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
