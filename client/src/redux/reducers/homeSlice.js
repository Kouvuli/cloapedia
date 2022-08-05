import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import guardianApi from "../../apis/guardianApi"

const initialState = {
  loading: false,
  error: false,
  news: [],
  foodNews: [],
  lifeStylesNews: [],
  sportNews: [],
  fashionNews: [],
  gameNews: [],
  travelNews: []
}
export const fetchNews = createAsyncThunk("get-news", async () => {
  const { response } = await guardianApi.getSection("/world", {
    "page-size": 5,
    page: 1,
    "show-fields": "all"
  })
  return response.results
})

export const fetchSport = createAsyncThunk("get-sports", async () => {
  const { response } = await guardianApi.getSection("/sport", {
    "page-size": 2,
    page: 1,
    "show-fields": "all"
  })
  return response.results
})

export const fetchFashion = createAsyncThunk("get-fashion", async () => {
  const { response } = await guardianApi.getSection("/fashion", {
    "page-size": 6,
    page: 1,
    "show-fields": "all"
  })
  return response.results
})

export const fetchLifeStyle = createAsyncThunk("get-lifestyle", async () => {
  const { response } = await guardianApi.getSection("/lifeandstyle", {
    "page-size": 4,
    page: 1,
    "show-fields": "all"
  })
  return response.results
})

export const fetchFood = createAsyncThunk("get-food", async () => {
  const { response } = await guardianApi.getSection("/food", {
    "page-size": 4,
    page: 1,
    "show-fields": "all"
  })
  return response.results
})

export const fetchGame = createAsyncThunk("get-games", async () => {
  const { response } = await guardianApi.getSection("/games", {
    "page-size": 3,
    page: 1,
    "show-fields": "all"
  })
  return response.results
})

export const fetchTravel = createAsyncThunk("get-travel", async () => {
  const { response } = await guardianApi.getSection("/travel", {
    "page-size": 3,
    page: 1,
    "show-fields": "all"
  })
  return response.results
})
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news = action.payload
        state.error = false
        state.loading = false
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })

      .addCase(fetchSport.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchSport.fulfilled, (state, action) => {
        state.sportNews = action.payload
        state.error = false
        state.loading = false
      })
      .addCase(fetchSport.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })

      .addCase(fetchFashion.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchFashion.fulfilled, (state, action) => {
        state.fashionNews = action.payload
        state.error = false
        state.loading = false
      })
      .addCase(fetchFashion.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })

      .addCase(fetchLifeStyle.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchLifeStyle.fulfilled, (state, action) => {
        state.lifeStylesNews = action.payload
        state.error = false
        state.loading = false
      })
      .addCase(fetchLifeStyle.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })

      .addCase(fetchFood.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchFood.fulfilled, (state, action) => {
        state.foodNews = action.payload
        state.error = false
        state.loading = false
      })
      .addCase(fetchFood.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })

      .addCase(fetchGame.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchGame.fulfilled, (state, action) => {
        state.gameNews = action.payload
        state.error = false
        state.loading = false
      })
      .addCase(fetchGame.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })

      .addCase(fetchTravel.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchTravel.fulfilled, (state, action) => {
        state.travelNews = action.payload
        state.error = false
        state.loading = false
      })
      .addCase(fetchTravel.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
  }
})

export default homeSlice
