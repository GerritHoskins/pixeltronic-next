import axios from 'axios'
export const BASE_URL = 'https://pixeltronic.info'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
})

export const setRequestInterceptor = (jwt: string) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${jwt}`
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
}

export const getBlog = (filter?: string) =>
  executeRequest(filter ? `/articles?${filter}&populate=*` : '/articles?&populate=*', 'GET')

const executeRequest = async (
  endpoint: string,
  method: 'GET' | 'POST' | 'PUT',
  data?: unknown,
  formData?: boolean
) => {
  const options = formData
    ? {
        method,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: data,
      }
    : { method, data: { data } }

  try {
    const responseData = await axiosInstance[options.method.toLowerCase()](
      `/strapi/api${endpoint}`,
      options.data
    )

    return responseData
  } catch (error) {
    console.error(error)
    return { error }
  }
}
