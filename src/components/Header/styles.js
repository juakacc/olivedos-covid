import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(theme => ({
  icon: {
    margin: theme.spacing(0, 1, 0),
  },
  toolbarTitle: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  toolbarTitleSmall: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  link: {
    margin: theme.spacing(0, 1),
  },
  grow: {
    flexGrow: 1,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}))

export default useStyles
