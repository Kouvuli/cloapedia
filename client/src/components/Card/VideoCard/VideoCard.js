import React from "react"
import styles from "./styles.module.css"
import pic from "../../../assets/images/upload/blog_10.jpg"
const VideoCard = () => {
  return (
    <>
      <div className={styles["blog-box"]}>
        <div className={styles["post-media"]}>
          <a href="single.html" title="">
            <img src={pic} alt="" className="img-fluid" />
            <div className={styles.hovereffect}>
              <span className={styles.videohover}></span>
            </div>
          </a>
        </div>
        <div className={styles["blog-meta"]}>
          <h4>
            <a href="single.html" title="">
              We are guests of ABC Design Studio - Vlog
            </a>
          </h4>
          <small>
            <a href="blog-category-01.html" title="">
              Videos
            </a>
          </small>
          <small>
            <a href="blog-category-01.html" title="">
              21 July, 2017
            </a>
          </small>
        </div>
      </div>
      <hr className={styles.invis}></hr>
    </>
  )
}

export default VideoCard
