import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { BASE_URL } from "../../constants"
import searchSlice, { fetchSearch } from "../../redux/reducers/searchSlice"
import { searchSelector } from "../../redux/selectors"
import styles from "./styles.module.css"
const TopSearch = ({ isSearch }) => {
  const [query, setQuery] = useState("")
  const dispatch = useDispatch()

  const searchHandler = (e) => {
    setQuery(e.target.value)
  }
  const submitQuery = (e) => {
    e.preventDefault()
    dispatch(searchSlice.actions.changeQuery(query))
    dispatch(
      fetchSearch({
        q: query,
        page: 1,
        "page-size": 9,
        "show-fields": "all"
      })
    )
  }
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
              value={query}
              onChange={searchHandler}
              className={styles["form-control"]}
              placeholder="What you are looking for?"
            />

            <button
              type="button"
              onClick={submitQuery}
              className={styles["btn"]}
            >
              <Link
                // className={styles["btn"]}
                // onClick={submitQuery}
                to={`/search`}
              >
                <i className="bx bx-search"></i>
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TopSearch
