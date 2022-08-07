import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import guardianApi from "../../apis/guardianApi"

const initialState = {
  loading: false,
  error: false,
  data: [],
  page: 1,
  query: "",
  totalPage: 0
}

export const fetchSearch = createAsyncThunk(
  "get-search-result",
  async (params) => {
    const { response } = await guardianApi.getSearchResult(params)
    return response
  }
)

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    changeQuery: (state, action) => {
      state.query = action.payload
      state.page = 1
    },
    changePage: (state, action) => {
      state.page = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearch.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchSearch.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.results
        state.totalPage = action.payload.pages

        state.error = false
      })
      .addCase(fetchSearch.rejected, (state, action) => {
        state.error = true
        state.loading = false
      })
  }
})

export default searchSlice
