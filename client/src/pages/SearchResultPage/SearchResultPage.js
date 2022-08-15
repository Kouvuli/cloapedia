import { Grid } from "@mui/material"
import { useEffect } from "react"
import SearchResultCard from "../../components/Card/SearchResultCard"
import BreadCrumb from "../../components/UI/BreadCrumb"
import { searchSelector } from "../../redux/selectors"
import { fetchSearch } from "../../redux/reducers/searchSlice"
import { useDispatch, useSelector } from "react-redux"
import styles from "./styles.module.css"
import CustomPagination from "../../components/UI/CustomPagination"
import LoadingCardSkeleton from "../../components/LoadingCardSkeleton"
import { CARD_TYPES } from "../../constants"
import Loading from "../../components/Loading"
import ResultNotFound from "../../components/ResultNotFound"
const SearchResultPage = () => {
  const dispatch = useDispatch()
  const { data, page, query, loading, error } = useSelector(searchSelector)
  useEffect(() => {
    dispatch(
      fetchSearch({
        q: query,
        page: page,
        "page-size": 9,
        "show-fields": "all"
      })
    )
  }, [page])
  return (
    <>
      <div className={`${styles["page-title"]} ${styles.wb}`}>
        <Grid
          container
          maxWidth="1170px"
          marginLeft={{ lg: "auto", xs: "0px" }}
          marginRight={{ lg: "auto", xs: "0px" }}
          padding={{ md: "0 20px", xs: "0 10px" }}
          justifyContent="center"
        >
          <Grid item xs={12}>
            <h2>
              <i className="bx bx-search-alt-2"></i> Search Result{" "}
            </h2>
          </Grid>
        </Grid>
      </div>

      <section className={`${styles["section"]} ${styles.wb}`}>
        <Grid
          container
          maxWidth="1170px"
          marginLeft={{ lg: "auto", xs: "0px" }}
          marginRight={{ lg: "auto", xs: "0px" }}
          padding={{ md: "0 20px", xs: "0 10px" }}
          justifyContent="center"
          columnSpacing={{ md: 3, xs: 0 }}
          rowSpacing={3}
        >
          {loading && (
            <>
              <Loading />
              <LoadingCardSkeleton
                type={CARD_TYPES.GRID}
                size={9}
                sm={12}
                md={4}
              />
            </>
          )}
          {!loading &&
            data.length > 0 &&
            data.map((value, i) => {
              return <SearchResultCard key={i} data={value} />
            })}
          {!loading && error && <ResultNotFound message="Result Not Found" />}
          <Grid item xs={12}>
            <CustomPagination type="search" />
          </Grid>
        </Grid>
      </section>
    </>
  )
}

export default SearchResultPage
