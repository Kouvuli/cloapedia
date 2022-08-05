import { Grid } from "@mui/material"
import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/banner_01.jpg"
const AdCard = () => {
  return (
    <Grid
      container
      justifyContent="center"
      marginRight="auto"
      marginLeft="auto"
      maxWidth="1170px"
    >
      <Grid item xs={10}>
        <div className={`${styles["banner-spot"]} ${styles.clearfix}`}>
          <div className={styles["banner-img"]}>
            <img src={pic} alt="" className={styles["img-fluid"]} />
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default AdCard
