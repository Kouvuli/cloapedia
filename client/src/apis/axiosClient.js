import axios from "axios"
import queryString from "query-string"
import { CLOAPEDIA_API, GUARDIAN_NEXT_GEN_API } from "./baseURL"

const request = (url) => {
  const axiosClient = axios.create({
    baseURL: url,
    headers: {
      "content-type": "application/json"
    },
    paramsSerializer: (params) => queryString.stringify(params)
  })

  axiosClient.interceptors.request.use(async (config) => {
    if (
      config.baseURL === GUARDIAN_NEXT_GEN_API ||
      config.baseURL === CLOAPEDIA_API
    ) {
      return config
    }
    config.params = {
      ...config.params,
      "api-key": "43b9d442-fd12-4164-ae6a-c85ee99148fd"
    }

    // config.params["api-key"] = "43b9d442-fd12-4164-ae6a-c85ee99148fd"
    return config
  })
  axiosClient.interceptors.response.use(
    (response) => {
      if (response && response.data) {
        return response.data
      }
      return response
    },
    (error) => {
      throw error
    }
  )
  return axiosClient
}

export default request
