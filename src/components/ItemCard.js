import React from "react"
import { Typography } from "@material-ui/core"

export default function ItemCard({ title, value, align = "left" }) {
  return (
    <Typography variant="body2" component="p" align={align}>
      {title}: {value}
    </Typography>
  )
}
