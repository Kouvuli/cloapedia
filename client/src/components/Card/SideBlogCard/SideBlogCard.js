import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/blog_square_01.jpg"
import { BASE_URL } from "../../../constants"
import { toDate } from "../../../utils"
import { Grid } from "@mui/material"
const SideBlogCard = ({ data, type }) => {
  if (type === "section") {
    const newURL = data.url.split("https://www.theguardian.com/")
    return (
      <a
        href={`${BASE_URL}/${newURL[1]}`}
        className={styles["list-group-item"]}
      >
        <Grid
          container
          columnSpacing={0}
          rowSpacing={0}
          className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
        >
          <Grid item xs={4}>
            <img
              src={data.image}
              alt=""
              className={`${styles["img-fluid"]} ${styles["float-left"]}`}
            />
          </Grid>
          <Grid item xs={8}>
            <h5 className={styles["mb-1"]}>{data.linkText}</h5>
            <small>{toDate(data.webPublicationDate)}</small>
          </Grid>
        </Grid>
      </a>
    )
  }
  return (
    <a href={`${BASE_URL}/${data.id}`} className={styles["list-group-item"]}>
      <Grid
        container
        columnSpacing={0}
        rowSpacing={0}
        className={`${styles["w-100"]} ${styles["justify-content-between"]}`}
      >
        <Grid item xs={4}>
          <img
            src={data.fields.thumbnail}
            alt=""
            className={`${styles["img-fluid"]} ${styles["float-left"]}`}
          />
        </Grid>
        <Grid xs={8}>
          <h5 className={styles["mb-1"]}>{data.fields.headline}</h5>
          <small>{toDate(data.fields.lastModified)}</small>
        </Grid>
      </Grid>
    </a>
  )
}

export default SideBlogCard