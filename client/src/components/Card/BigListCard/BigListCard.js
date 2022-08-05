import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/blog_custom_02.jpg"
import { Grid } from "@mui/material"
import { BASE_URL } from "../../../constants"
import _ from "lodash"
import { toDate } from "../../../utils"
const BigListCard = ({ data }) => {
  return (
    <>
      {!_.isEmpty(data) && (
        <Grid item xs={12}>
          <div className={styles["blog-box"]}>
            <div className={styles["post-media"]}>
              <a href={`${BASE_URL}/${data.id}`} title="">
                <img src={data.fields.thumbnail} alt="" className="img-fluid" />
                <div className={styles.hovereffect}>
                  <span></span>
                </div>
              </a>
            </div>

            <div
              className={`${styles["blog-meta"]} ${styles["big-meta"]} ${styles["text-center"]}`}
            >
              <div className={styles["post-sharing"]}>
                <ul className={styles["list-inline"]}>
                  <li>
                    <a
                      href="#"
                      className={`${styles["fb-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                    >
                      <i className="fa fa-facebook"></i>{" "}
                      <span className="down-mobile">Share on Facebook</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${styles["tw-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                    >
                      <i className="fa fa-twitter"></i>{" "}
                      <span className="down-mobile">Tweet on Twitter</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className={`${styles["gp-button"]} ${styles.btn} ${styles["btn-primary"]}`}
                    >
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <h4>
                <a href={`${BASE_URL}/${data.id}`} title="">
                  {data.fields.headline}
                </a>
              </h4>
              <p>{data.fields.trailText}</p>
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

export default BigListCard
