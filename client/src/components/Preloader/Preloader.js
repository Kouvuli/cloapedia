import React from "react"
import styles from "./styles.module.scss"
import CircularProgress from "@mui/material/CircularProgress"
const Preloader = () => {
  return (
    <div id={styles.preloder}>
      <CircularProgress
        sx={{ color: "white" }}
        className={styles.loader}
      ></CircularProgress>
    </div>
  )
}

export default Preloader
