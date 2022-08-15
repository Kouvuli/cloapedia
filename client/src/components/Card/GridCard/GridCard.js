import { Grid } from "@mui/material"
import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/blog_travel_02.jpg"
import { toDate } from "../../../utils"
import { BASE_URL } from "../../../constants"
import _ from "lodash"
import parse from "html-react-parser"
import DefaultImage from "../../../assets/images/default-image.png"
const GridCard = ({ md = 6, xs = 12, data }) => {
  return (
    <>
      {!_.isEmpty(data) && (
        <Grid item md={md} xs={xs}>
          <div className={styles["blog-box"]}>
            <div className={styles["post-media"]}>
              <a href={`${BASE_URL}/${data.id}`} title="">
                <img
                  src={
                    data.fields.thumbnail ? data.fields.thumbnail : DefaultImage
                  }
                  alt=""
                  className="img-fluid"
                />
                <div className={styles.hovereffect}>
                  <span></span>
                </div>
              </a>
            </div>
            <div className={`${styles["blog-meta"]} ${styles["big-meta"]}`}>
              <h4>
                <a href={`${BASE_URL}/${data.id}`} title="">
                  {data.fields.headline}
                </a>
              </h4>
              <p>{parse(data.fields.trailText)}</p>
              <small>{data.sectionName}</small>

              <small>{toDate(data.fields.lastModified)}</small>

              <small>by {data.fields.byline}</small>
            </div>
          </div>
          <hr className={styles["invis"]}></hr>
        </Grid>
      )}
    </>
  )
}

export default GridCard
