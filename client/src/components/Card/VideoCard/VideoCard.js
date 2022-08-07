import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/blog_10.jpg"
import { toDate } from "../../../utils"
import { BASE_URL } from "../../../constants"
import _ from "lodash"
import DefaultImage from "../../../assets/images/default-image.png"
const VideoCard = ({ data }) => {
  return (
    <>
      {!_.isEmpty(data) && (
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
                {/* <span className={styles.videohover}></span> */}
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
      )}
      <hr className={styles.invis}></hr>
    </>
  )
}

export default VideoCard
