import { Grid } from "@mui/material"
import React from "react"
import { BASE_URL } from "../../../constants"
import { toDate } from "../../../utils"
import styles from "./styles.module.css"
import DefaultImage from "../../../assets/images/default-image.png"
const FooterCard = ({ data }) => {
  const newURL = data.url.split("https://www.theguardian.com/")
  return (
    <a href={`${BASE_URL}/${newURL[1]}`} className={styles["list-group-item"]}>
      <div
        className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
      >
        <Grid container columnSpacing={3} rowSpacing={0}>
          <Grid item xs={4}>
            <img
              src={data.image ? data.image : DefaultImage}
              alt=""
              className={`${styles["img-fluid"]} ${styles["float-left"]}`}
            />
          </Grid>
          <Grid item xs={8}>
            <h5 className={styles["mb-1"]}>{data.linkText}</h5>
            <small>{toDate(data.webPublicationDate)}</small>
          </Grid>
        </Grid>
      </div>
    </a>
  )
}

export default FooterCard
