import React from "react"

import styles from "./styles.module.css"
import authorpic from "../../../assets/images/upload/author.jpg"
import { timeSince } from "../../../utils"
const CommentCard = ({ data }) => {
  return (
    <div className={styles.media}>
      <a className={styles["media-left"]} href="#">
        <img
          src={!data.author.avatar ? authorpic : data.author.avatar}
          alt=""
          className={styles["rounded-circle"]}
        />
      </a>
      <div className={styles["media-body"]}>
        <h4 className={`${styles["media-heading"]} ${styles["user_name"]}`}>
          {data.author.username} <small>{timeSince(data.create_at)}</small>
        </h4>
        <p>{data.content}</p>
      </div>
    </div>
  )
}

export default CommentCard
