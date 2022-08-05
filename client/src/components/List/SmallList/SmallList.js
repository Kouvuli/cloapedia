import React from "react"
import styles from "./styles.module.css"
import Loading from "../../Loading"
import ResultNotFound from "../../ResultNotFound"
import { Grid } from "@mui/material"
import SmallListCard from "../../Card/SmallListCard"
import LoadingCardSkeleton from "../../LoadingCardSkeleton"
import { CARD_TYPES } from "../../../constants"
const SmallList = ({ loading, data, error }) => {
  return (
    <Grid container columnSpacing={3}>
      {loading && (
        <>
          <Loading />
          <LoadingCardSkeleton
            type={CARD_TYPES.SMALL}
            size={10}
            sm={12}
            md={12}
            lg
          />
        </>
      )}
      {!loading &&
        data.map((value, i) => {
          return <SmallListCard key={i} data={value} />
        })}
      {error && <ResultNotFound message={error.message} />}
    </Grid>
  )
}

export default SmallList
