import axiosClient from "./axiosClient"
import { CLOAPEDIA_API } from "./baseURL"
import authHeader from "./auth-header"
const request = axiosClient(CLOAPEDIA_API)
const cloapediaApi = {
  validateToken: (token) => {
    const url = `auth/validate/${token}`
    return request.get(url)
  },
  registerUser: ({ fullname, dob, username, password, is_admin }) => {
    const url = `/auth/signup`

    return request.post(url, {
      fullname,
      dob,
      username,
      password,
      is_admin
    })
  },
  authenticateUser: ({ username, password }) => {
    const url = `/auth/signin`
    return request.post(url, { username, password }).then((response) => {
      if (response.data.access_token) {
        localStorage.setItem("user", JSON.stringify(response.data))
      }

      return response.data
    })
  },
  getAllBlog: (params) => {
    const url = "/blog"
    return request.get(url, { params })
  },
  getBlogById: (id) => {
    const url = `blog/${id}`
    return request.get(url)
  },
  insertBlog: (data) => {
    const url = "/blog"
    return request.post(url, data, { headers: authHeader() })
  },
  uploadFile: (data) => {
    const url = "/file"

    return request.post(url, data, { headers: authHeader() })
  },
  getCommentsById: (params) => {
    const url = "/comment"
    return request.get(url, { params })
  },
  insertComment: (data) => {
    const url = "/comment"
    return request.post(url, data, { headers: authHeader() })
  }
}

export default cloapediaApi
