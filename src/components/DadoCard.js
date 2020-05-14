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

export default function ImgMediaCard({ image }) {
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
            Brasil
          </Typography>
          <Typography variant="body2" component="p">
            Casos:
          </Typography>
          <Typography variant="body2" component="p">
            Vítimas:
          </Typography>
          <Typography variant="body2" component="p">
            Casos:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Atualizado em:
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
