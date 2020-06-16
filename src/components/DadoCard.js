import React from "react"
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core"
import moment from "moment"

import ItemCard from "../components/ItemCard"

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 345,
    display: "block",
    margin: "auto",
  },
  deaths: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "red",
    color: "white",
  },
  recovered: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "green",
    color: "white",
  },
  monitored: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "orange",
    color: "black",
  },
  descarded: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "blue",
    color: "white",
  },
  cases: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "purple",
    color: "white",
  },
  suspect: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "brown",
    color: "white",
  },
  sem: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "gray",
    color: "white",
  },
  date: {
    color: "gray",
    margin: theme.spacing(1, 0, 0, 0),
  },
}))

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
          <div className={classes.cases}>
            <ItemCard title="Casos" value={data.confirmed} />
          </div>
          {data.title === "Olivedos" ? (
            <>
              <Typography variant="body2" align="center">
                * O número de casos inclui todos os que foram diagnosticados no
                município.
              </Typography>
              <div className={classes.suspect}>
                <ItemCard title="Suspeitos" value={data.suspect} />
              </div>
              <div className={classes.monitored}>
                <ItemCard title="Monitorados" value={data.monitored} />
              </div>
              <div className={classes.descarded}>
                <ItemCard title="Descartados" value={data.discarded} />
              </div>
            </>
          ) : (
            <>
              <div className={classes.sem}>
                <ItemCard title="Ativos" value={data.cases} />
              </div>
            </>
          )}
          <div className={classes.recovered}>
            <ItemCard title="Recuperados" value={data.recovered} />
          </div>
          <div className={classes.deaths}>
            <ItemCard title="Vítimas fatais" value={data.deaths} />
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
