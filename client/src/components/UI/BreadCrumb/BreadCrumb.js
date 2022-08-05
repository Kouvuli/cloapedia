import React from "react"
import styles from "./styles.module.css"
const BreadCrumb = () => {
  return (
    <ol className={styles.breadcrumb}>
      <li className={styles["breadcrumb-item"]}>
        <a href="#">Home</a>
      </li>
      <li className={styles["breadcrumb-item"]}>
        <a href="#">Pages</a>
      </li>
      <li className={`${styles["breadcrumb-item"]} ${styles.active}`}>
        Not Found
      </li>
    </ol>
  )
}

export default BreadCrumb
