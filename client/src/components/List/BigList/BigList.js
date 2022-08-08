import { Grid } from "@mui/material"
import React from "react"
import BigListCard from "../../Card/BigListCard/BigListCard"
import Loading from "../../Loading"
import LoadingCardSkeleton from "../../LoadingCardSkeleton"
import ResultNotFound from "../../ResultNotFound"
function uploadImageCallBack(file) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open("POST", "https://api.imgur.com/3/image")
    xhr.setRequestHeader("Authorization", "Client-ID ##clientid###")
    const data = new FormData()
    data.append("image", file)
    xhr.send(data)
    xhr.addEventListener("load", () => {
      const response = JSON.parse(xhr.responseText)
      console.log(response)
      resolve(response)
    })
    xhr.addEventListener("error", () => {
      const error = JSON.parse(xhr.responseText)
      console.log(error)
      reject(error)
    })
  })
}
const BigList = ({ loading, data, error }) => {
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
          return <BigListCard key={i} data={value} />
        })}
      {error && <ResultNotFound message={error.message} />}
    </Grid>
  )
}

export default BigList
