import { Grid } from "@mui/material"
import React from "react"
import { CARD_TYPES } from "../../../constants"
import GridCard from "../../Card/GridCard"
import Loading from "../../Loading"
import LoadingCardSkeleton from "../../LoadingCardSkeleton"

const GridList = ({ loading, data, error }) => {
  return (
    <Grid container columnSpacing={3}>
      {loading && (
        <>
          <Loading />
          <LoadingCardSkeleton
            type={CARD_TYPES.GRID}
            size={10}
            sm={12}
            md={6}
          />
        </>
      )}
      {!loading &&
        data.map((value, i) => {
          return <GridCard key={i} data={value} />
        })}
      {error && <ResultNotFound message={error.message} />}
    </Grid>
  )
}

export default GridList
