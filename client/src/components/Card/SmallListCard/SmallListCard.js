import { useEffect } from "react"
import styles from "./styles.module.css"
import { Grid } from "@mui/material"
import pic from "../../../assets/images/upload/blog_square_05.jpg"
import { fetchDetailById } from "../../../redux/reducers/detailSlice"
import { useSelector, useDispatch } from "react-redux"
import { detailSelector } from "../../../redux/selectors"
import { toDate } from "../../../utils"
import { BASE_URL } from "../../../constants"
import _ from "lodash"
const SmallListCard = ({ data }) => {
  return (
    <>
      {!_.isEmpty(data) && (
        <Grid item xs={12}>
          <Grid container className={styles["blog-box"]} columnSpacing={3}>
            <Grid item md={4} xs={12}>
              <div className={styles["post-media"]}>
                <a href={`${BASE_URL}/${data.id}`} title="">
                  <img
                    src={data.fields.thumbnail}
                    alt=""
                    className={styles["img-fluid"]}
                  />
                  <div className={styles["hovereffect"]}>
                    <span></span>
                  </div>
                </a>
              </div>
            </Grid>

            <Grid
              item
              md={8}
              xs={12}
              className={`${styles["blog-meta"]} ${styles["big-meta"]}`}
            >
              <h4>
                <a href={`${BASE_URL}/${data.id}`} title="">
                  {data.fields.headline}
                </a>
              </h4>
              <p>{data.fields.trailText}</p>
              <small>{data.sectionName}</small>
              <small>{toDate(data.fields.lastModified)}</small>
              <small>by {data.fields.byline}</small>
            </Grid>
          </Grid>
          <hr className={styles["invis"]} />
        </Grid>
      )}
    </>
  )
}

export default SmallListCard
