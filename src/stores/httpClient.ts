import axios from 'axios'

// на случай расширения проекта, создам клиент, для работы с беком.

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_PROD_API ?? import.meta.env.VITE_PROD_API,
})
