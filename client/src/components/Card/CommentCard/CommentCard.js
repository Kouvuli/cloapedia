import React from "react"
import RectangleButton from "../../UI/Button/RectangleButton"
import styles from "./styles.module.css"
import authorpic from "../../../assets/images/upload/author.jpg"
const CommentCard = () => {
  return (
    <div className={styles.media}>
      <a className={styles["media-left"]} href="#">
        <img src={authorpic} alt="" className={styles["rounded-circle"]} />
      </a>
      <div className={styles["media-body"]}>
        <h4 className={`${styles["media-heading"]} ${styles["user_name"]}`}>
          Amanda Martines <small>5 days ago</small>
        </h4>
        <p>
          Exercitation photo booth stumptown tote bag Banksy, elit small batch
          freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit
          kale chips proident chillwave deep v laborum. Aliquip veniam delectus,
          Marfa eiusmod Pinterest in do umami readymade swag. Selfies iPhone
          Kickstarter, drinking vinegar jean.
        </p>
      </div>
    </div>
  )
}

export default CommentCard
