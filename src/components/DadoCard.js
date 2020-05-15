import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"

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
          alt="Entidade"
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
          <Typography variant="body2" component="p">
            Recuperados: {data.recovered}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Atualizado em: {new Date(data.updated_at).toString()}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}