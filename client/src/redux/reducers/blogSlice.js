import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import cloapediaApi from "../../apis/cloapediaApi"

const initialState = {
  loading: false,
  error: false,
  success: false,
  currentUserError: false,
  currentUser: {},
  data: [],
  hasNext: false,
  page: 1,
  totalPage: 0,
  viewType: "small",
  limit: 10
}

export const createBlog = createAsyncThunk("create-blog", async (param) => {
  const data = cloapediaApi.insertBlog(param)
  return data
})

export const fetchAllBlog = createAsyncThunk("all-blog", async (param) => {
  const data = cloapediaApi.getAllBlog(param)
  return data
})

export const uploadImage = createAsyncThunk("upload-image", async (body) => {
  const { data } = await cloapediaApi.uploadFile(body)
  return data
})

export const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
      if (action.payload === null) {
        state.currentUserError = true
      }
    },
    changePage: (state, action) => {
      state.page = action.payload
    },
    changeViewType: (state, action) => {
      state.viewType = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createBlog.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        // state.data.push(...action.payload)
        // ++state.page
        state.success = true
        state.loading = false
        state.error = false
      })
      .addCase(createBlog.rejected, (state, action) => {
        state.loading = false
        state.error = true
      })
      .addCase(fetchAllBlog.pending, (state) => {
        if (state.page === 1) {
          state.loading = true
        } else {
          state.loading = false
        }
        state.error = false
      })
      .addCase(fetchAllBlog.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.hasNext = action.payload.pagination.has_next_page

        state.totalPage = action.payload.pagination.last_visible_page
        state.loading = false
        state.error = false
      })
      .addCase(fetchAllBlog.rejected, (state, action) => {
        state.loading = false
        state.error = action.error
      })
  }
})

export default blogSlice
