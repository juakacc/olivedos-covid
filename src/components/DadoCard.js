import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

import moment from "moment"

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
          <Typography variant="body2" component="p">
            Casos: {data.confirmed}
          </Typography>
          <Typography variant="body2" component="p">
            Ativos: {data.cases}
          </Typography>
          <Typography variant="body2" component="p">
            Vítimas fatais: {data.deaths}
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            Recuperados: {data.recovered}
          </Typography>
          <Typography variant="body2" component="p" align="right">
            Atualizado em: {moment(data.updated_at).format("DD/MM/yyyy")}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
