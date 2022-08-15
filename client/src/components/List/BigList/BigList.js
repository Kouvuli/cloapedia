import { Grid } from "@mui/material"
import React from "react"
import BigListCard from "../../Card/BigListCard/BigListCard"
import Loading from "../../Loading"
import LoadingCardSkeleton from "../../LoadingCardSkeleton"
import ResultNotFound from "../../ResultNotFound"

const BigList = ({ loading, data, type = "default", error }) => {
  const convertData = (data) => {
    return {
      id: `blog/${data.id}`,
      sectionName: "blog",
      fields: {
        thumbnail: data.thumbnail,
        headline: data.headline,
        trailText: data.trail_text ? data.trail_text : "",
        lastModified: data.create_at,
        byline: data.author.username
      }
    }
  }
  return (
    <Grid container columnSpacing={3}>
      {loading && (
        <>
          <Loading />
          <LoadingCardSkeleton size={10} sm={12} md={12} />
        </>
      )}
      {!loading &&
        data.map((value, i) => {
          if (type === "blog") {
            value = convertData(value)
          }
          return <BigListCard key={i} data={value} />
        })}
      {error && <ResultNotFound message={error.message} />}
    </Grid>
  )
}

export default BigList
