import React from "react"
import styles from "./styles.module.scss"
import CircularProgress from "@mui/material/CircularProgress"
import Loader from "../../assets/images/loader.gif"
const Preloader = () => {
  return (
    <div id={styles.preloder}>
      {/* <img class="preloader" src="images/loader.gif" alt=""></img> */}
      <CircularProgress
        sx={{ color: "white" }}
        size={60}
        className={styles.loader}
      ></CircularProgress>
    </div>
  )
}

export default Preloader
