import React from "react"
import { Link } from "react-router-dom"
import styles from "./RectangleButton.module.css"
const RectangleButton = (props) => {
  return (
    <a href={props.href} className={`${styles.btn} ${styles["btn-primary"]}`}>
      {props.children}
    </a>
  )
}

export default RectangleButton
