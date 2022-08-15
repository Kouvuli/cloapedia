import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/menu_01.jpg"
import { Grid } from "@mui/material"
import { BASE_URL } from "../../../constants"
import DefaultImage from "../../../assets/images/default-image.png"
import { toDate } from "../../../utils"
import _ from "lodash"
const SearchResultCard = ({ data }) => {
  return (
    <>
      {!_.isEmpty(data) && (
        <Grid item md={4} xs={12}>
          <div className={styles["blog-box"]}>
            <div className={styles["post-media"]}>
              <a href={`${BASE_URL}/${data.id}`} title="">
                <img
                  src={
                    data.fields.thumbnail ? data.fields.thumbnail : DefaultImage
                  }
                  alt=""
                  className={styles["img-fluid"]}
                />
                <div className={styles.hovereffect}>
                  <span></span>
                </div>
              </a>
            </div>
            <div className={styles["blog-meta"]}>
              <span className="bg-grey">
                <a title="">{data.sectionName}</a>
              </span>

              <h4>
                <a href={`${BASE_URL}/${data.id}`} title="">
                  {data.fields.headline}
                </a>
              </h4>
              <small>{data.sectionName}</small>
              <small>{toDate(data.fields.lastModified)}</small>
            </div>
          </div>
          <hr className={styles.invis}></hr>
        </Grid>
      )}
    </>
  )
}

export default SearchResultCard
