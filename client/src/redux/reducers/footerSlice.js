import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import guardianApi from "../../apis/guardianApi"
import guardianNextGenApi from "../../apis/guardianNextGenApi"

const initialState = {
  loading: false,
  error: false,
  count: {
    world: 0,
    sport: 0,
    fashion: 0,
    lifestyle: 0,
    art: 0,
    game: 0,
    food: 0,
    travel: 0
  },
  mostReadAll: [],
  mostReadAcrossCleopedia: [],
  mostCommented: {},
  mostShared: {}
}

export const fetchMostReadAll = createAsyncThunk(
  "get-most-read-all",
  async () => {
    const { trails } = await guardianNextGenApi.getTopRead({
      dcr: "true"
    })
    return trails
  }
)

export const fetchMostReadAcrossCleopedia = createAsyncThunk(
  "get-most-read-across-cleopedia",
  async () => {
    const data = await guardianNextGenApi.getTopReadSection(
      "/most-read/theguardian.json",
      {
        dcr: "true"
      }
    )
    return data
  }
)
export const fetchSectionCount = createAsyncThunk(
  "get-popular-section-count",
  async () => {
    const result = {
      world: 0,
      sport: 0,
      fashion: 0,
      lifestyle: 0,
      art: 0,
      game: 0,
      food: 0,
      travel: 0
    }
    var { response } = await guardianApi.getSection("/world")
    result.world = response.total
    var { response } = await guardianApi.getSection("/sport")
    result.sport = response.total
    var { response } = await guardianApi.getSection("/fashion")
    result.fashion = response.total
    var { response } = await guardianApi.getSection("/lifeandstyle")
    result.lifestyle = response.total
    var { response } = await guardianApi.getSection("/artanddesign")
    result.art = response.total
    var { response } = await guardianApi.getSection("/games")
    result.game = response.total
    var { response } = await guardianApi.getSection("/food")
    result.food = response.total
    var { response } = await guardianApi.getSection("/travel")
    result.travel = response.total

    return result
  }
)

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMostReadAll.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchMostReadAll.fulfilled, (state, action) => {
      state.mostReadAll = action.payload

      // fetchTopReadBySection(`/most-read/${state.data.}`)
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchMostReadAll.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })

    builder.addCase(fetchMostReadAcrossCleopedia.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchMostReadAcrossCleopedia.fulfilled, (state, action) => {
      state.mostReadAcrossCleopedia = action.payload.tabs[0].trails
      state.mostCommented = action.payload.mostCommented
      state.mostShared = action.payload.mostShared
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchMostReadAcrossCleopedia.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })
    builder.addCase(fetchSectionCount.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchSectionCount.fulfilled, (state, action) => {
      state.count = action.payload

      // fetchTopReadBySection(`/most-read/${state.data.}`)
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchSectionCount.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })
  }
})

export default footerSlice
