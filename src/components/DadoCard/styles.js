const { makeStyles } = require("@material-ui/core")

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
    backgroundColor: "#e74c3c",
    color: "white",
  },
  recovered: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "#27ae60",
    color: "white",
  },
  monitored: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "#f39c12",
    color: "white",
  },
  descarded: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "#2980b9",
    color: "white",
  },
  cases: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "#8e44ad",
    color: "white",
  },
  suspect: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "#2c3e50",
    color: "white",
  },
  sem: {
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    borderRadius: 5,
    backgroundColor: "#7f8c8d",
    color: "white",
  },
  date: {
    color: "gray",
    margin: theme.spacing(1, 0, 0, 0),
  },
}))

export default useStyles
