import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/blog_square_01.jpg"
import { BASE_URL } from "../../../constants"
import { toDate } from "../../../utils"
import { Grid } from "@mui/material"
import DefaultImage from "../../../assets/images/default-image.png"
const SideBlogCard = ({ data, type }) => {
  if (type === "section") {
    const newURL = data.url.split("https://www.theguardian.com/")
    return (
      <a
        href={`${BASE_URL}/${newURL[1]}`}
        className={styles["list-group-item"]}
      >
        <div
          className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
        >
          <Grid container columnSpacing={2} rowSpacing={0}>
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
  return (
    <a href={`${BASE_URL}/${data.id}`} className={styles["list-group-item"]}>
      <div
        className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
      >
        <Grid container columnSpacing={2} rowSpacing={0}>
          <Grid item xs={4}>
            <img
              src={data.fields.thumbnail ? data.fields.thumbnail : DefaultImage}
              alt=""
              className={`${styles["img-fluid"]} ${styles["float-left"]}`}
            />
          </Grid>
          <Grid item xs={8}>
            <h5 className={styles["mb-1"]}>{data.fields.headline}</h5>
            <small>{toDate(data.fields.lastModified)}</small>
          </Grid>
        </Grid>
      </div>
    </a>
  )
}

export default SideBlogCard
