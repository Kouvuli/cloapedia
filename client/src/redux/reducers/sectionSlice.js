import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import guardianApi from "../../apis/guardianApi"
import guardianNextGenApi from "../../apis/guardianNextGenApi"

const initialState = {
  loading: false,
  error: false,
  data: [],
  mostRead: [],
  viewType: "small",
  totalPage: 0,
  page: 1,
  limit: 10
}

export const fetchDataBySection = createAsyncThunk(
  "get-section",
  async (params) => {
    const { response: data } = await guardianApi.getSection(params.url, {
      "page-size": params.limit,
      page: params.page,
      type: params.type,
      "show-fields": params["show-fields"]
    })
    // console.log(results)
    return data
  }
)

export const fetchTopReadBySection = createAsyncThunk(
  "get-most-read-by-section",
  async (url) => {
    const data = await guardianNextGenApi.getTopReadSection(url, {
      dcr: "true"
    })
    return data
  }
)

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload
    },
    changeViewType: (state, action) => {
      state.viewType = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataBySection.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchDataBySection.fulfilled, (state, action) => {
      state.data = action.payload.results
      state.totalPage = action.payload.pages
      // fetchTopReadBySection(`/most-read/${state.data.}`)
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchDataBySection.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })

    builder.addCase(fetchTopReadBySection.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchTopReadBySection.fulfilled, (state, action) => {
      state.mostRead = action.payload.tabs[0].trails
      state.loading = false
      state.error = false
    })
    builder.addCase(fetchTopReadBySection.rejected, (state, action) => {
      state.loading = false
      state.error = action.error
    })
  }
})

export default sectionSlice
