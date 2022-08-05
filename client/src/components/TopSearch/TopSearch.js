import { useState } from "react"
import styles from "./styles.module.css"
const TopSearch = ({ isSearch }) => {
  return (
    <div
      className={
        isSearch
          ? `${styles["top-search"]}`
          : `${styles["top-search"]} ${styles.collapse}`
      }
      id="collapseExample"
    >
      <div className={`${styles["card"]} ${styles["card-block"]}`}>
        <div
          className={`${styles["newsletter-widget"]} ${styles["text-center"]}`}
        >
          <form className={styles["form-inline"]}>
            <input
              type="text"
              className={styles["form-control"]}
              placeholder="What you are looking for?"
            />
            <button type="submit" className={styles["btn"]}>
              <i class="bx bx-search"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TopSearch
