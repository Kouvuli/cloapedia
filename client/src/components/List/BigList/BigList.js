import { Grid } from "@mui/material"
import React from "react"
import BigListCard from "../../Card/BigListCard/BigListCard"
import Loading from "../../Loading"
import LoadingCardSkeleton from "../../LoadingCardSkeleton"
import ResultNotFound from "../../ResultNotFound"

const BigList = ({ loading, data, error }) => {
  return (
    <Grid container columnSpacing={3}>
      {loading && (
        <>
          <Loading />
          <LoadingCardSkeleton size={10} sm={12} md={12} />
        </>
      )}
      {data.map((value, i) => {
        return <BigListCard key={i} data={value} />
      })}
      {error && <ResultNotFound message={error.message} />}
    </Grid>
  )
}

export default BigList
