import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/blog_01.jpg"
import { Grid } from "@mui/material"
import { BASE_URL } from "../../../constants"
import { toDate } from "../../../utils"
const VerticalCard = ({ data }) => {
  return (
    <>
      <Grid item md={6} xs={12}>
        <div className={styles["blog-box"]}>
          <div className={styles["post-media"]}>
            <a href={`${BASE_URL}/${data.id}`} title="">
              <img
                src={data.fields.thumbnail}
                alt=""
                className={styles["img-fluid"]}
              />
              <div className={styles.hovereffect}>
                <span></span>
              </div>
            </a>
          </div>
          <div className={styles["blog-meta"]}>
            <h4>
              <a href={`${BASE_URL}/${data.id}`} title="">
                {data.fields.headline}
              </a>
            </h4>
            <small>{data.sectionName}</small>
            <small>{toDate(data.fields.lastModified)}</small>
          </div>
        </div>
      </Grid>

      <hr className={styles.invis}></hr>
    </>
  )
}

export default VerticalCard
