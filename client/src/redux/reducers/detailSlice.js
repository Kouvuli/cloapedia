import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import guardianApi from "../../apis/guardianApi"
import cloapediaApi from "../../apis/cloapediaApi"
const initialState = {
  loading: false,
  error: false,
  data: {},
  currentUser: {},
  currentUserError: false,
  comments: [],
  commentsPage: 1,
  commentsLimit: 10,
  commentsLoading: false,
  hasNextComment: false,
  commentsError: false,

  createCommentError: false,
  createCommentLoading: false,
  createCommentSuccess: false,
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

export const fetchBlogDetailById = createAsyncThunk(
  "blog-detail",
  async (id) => {
    const { data } = await cloapediaApi.getBlogById(id)
    return data
  }
)

export const fetchCommentsById = createAsyncThunk(
  "comments",
  async (params) => {
    const data = await cloapediaApi.getCommentsById(params)
    return data
  }
)

export const createComment = createAsyncThunk(
  "insert-comment",
  async (params) => {
    const data = await cloapediaApi.insertComment(params)
    return data
  }
)

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.currentUser = action.payload
      if (action.payload === null) {
        state.currentUserError = true
      }
    }
  },
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

      .addCase(fetchBlogDetailById.pending, (state) => {
        state.loading = true
        state.error = false
      })
      .addCase(fetchBlogDetailById.fulfilled, (state, action) => {
        state.loading = false
        state.data = action.payload
        state.error = false
      })
      .addCase(fetchBlogDetailById.rejected, (state, action) => {
        state.error = true
        state.loading = false
      })

      .addCase(fetchCommentsById.pending, (state) => {
        state.commentsLoading = true
        state.commentsError = false
      })
      .addCase(fetchCommentsById.fulfilled, (state, action) => {
        state.commentsLoading = false
        state.comments.push(...action.payload.data)
        state.hasNextComment = action.payload.pagination.has_next_page
        ++state.commentsPage
        state.commentsError = false
      })
      .addCase(fetchCommentsById.rejected, (state, action) => {
        state.error = true
        state.loading = false
      })

      .addCase(createComment.pending, (state) => {
        state.createCommentLoading = true
        state.createCommentError = false
      })
      .addCase(createComment.fulfilled, (state, action) => {
        // state.data.push(...action.payload)
        // ++state.page
        state.createCommentSuccess = true
        state.createCommentLoading = false
        state.createCommentError = false
      })
      .addCase(createComment.rejected, (state, action) => {
        state.createCommentLoading = false
        state.createCommentError = true
      })
  }
})

export default detailSlice
