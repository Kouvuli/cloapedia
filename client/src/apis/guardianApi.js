import axiosClient from "./axiosClient"
import { GUARDIAN_API } from "./baseURL"

const request = axiosClient(GUARDIAN_API)
const guardianApi = {
  getSection: (url, params) => {
    // const url = "/sections"
    // console.log(url)

    return request.get(url, { params })
  },
  getDetailContentById(url, params) {
    // console.log(url)
    return request.get(url, { params })
  },
  getAuthorById(url) {
    return request.get(url)
  },
  getSearchResult(params) {
    const url = "/search"
    return request.get(url, { params })
  }
}

export default guardianApi
