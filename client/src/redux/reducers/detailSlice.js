import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import guardianApi from "../../apis/guardianApi"
import parse from "html-react-parser"
const initialState = {
  loading: false,
  error: false,
  data: {},

  relatedData: []
}

export const fetchDetailById = createAsyncThunk("detail", async (url) => {
  const { response } = await guardianApi.getDetailContentById(url, {
    "show-fields": "all",
    "show-related": true,
    "show-tags": "all"
  })
  return response
})

export const fetchAuthorData = createAsyncThunk("author", async (url) => {
  console.log("author")
  const { response } = await guardianApi.getAuthorById(url)
  return response
})

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailById.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchDetailById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload.content
        state.relatedData = action.payload.relatedContent

        state.error = false
      })
      .addCase(fetchDetailById.rejected, (state, action) => {
        state.error = true
        state.loading = false
      })
  }
})

export default detailSlice
