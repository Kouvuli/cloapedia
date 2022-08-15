import React from "react"
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import cloapediaApi from "../../apis/cloapediaApi"

const initialState = {
  loginSuccess: false,
  loginLoading: false,
  loginError: false,
  signUpSuccess: false,
  signUpLoading: false,
  signUpError: false,

  data: JSON.parse(localStorage.getItem("user")),
  success: false
}
// export const validateToken = createAsyncThunk(
//   "validate-token",
//   async (token) => {
//     const { status } = await cloapediaApi.validateToken(token)
//     return status
//   }
// )
export const SignUp = createAsyncThunk("signup", async (formData) => {
  const data = await cloapediaApi.registerUser(formData)
  if (data.error) throw new Error(data.error.message)

  return data
})

export const Login = createAsyncThunk("login", async (formData) => {
  const data = await cloapediaApi.authenticateUser(formData)
  if (data.error) throw new Error(data.error.message)
  return data
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.data = null
      localStorage.removeItem("user")
      state.loginSuccess = false
      state.loginLoading = false
      state.loginError = false
      state.signUpSuccess = false
      state.signUpLoading = false
      state.signUpError = false
    },
    restartSignUp: (state) => {
      if (state.signUpSuccess === true) {
        state.signUpSuccess = false
      }
      if (state.signUpError === true) {
        state.signUpError = false
      }
      if (state.signUpLoading === true) {
        state.signUpLoading = false
      }
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(SignUp.pending, (state) => {
        state.signUpLoading = true
        state.signUpError = false
        state.signUpSuccess = false
      })
      .addCase(SignUp.fulfilled, (state, action) => {
        state.signUpSuccess = true
        state.signUpLoading = false
        state.signUpError = false
      })
      .addCase(SignUp.rejected, (state, action) => {
        state.signUpError = true
        state.signUpLoading = false
      })
      .addCase(Login.pending, (state, action) => {
        state.loginLoading = true
        state.loginSuccess = false
        state.loginError = false
      })
      .addCase(Login.fulfilled, (state, action) => {
        state.loginSuccess = true
        state.data = action.payload
        state.loginLoading = false
      })
      .addCase(Login.rejected, (state, action) => {
        state.loginError = true
        state.loginLoading = false
      })
  }
})

export default authSlice
