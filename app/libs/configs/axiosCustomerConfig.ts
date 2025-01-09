'use client'

import axios from 'axios';
import { ResponseData } from '../types';


const axiosCustomerConfig = axios.create({
  baseURL: `${process.env.API_URL}/api/v1`,
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// axiosCustomerConfig.interceptors.request.use((config) => {
//   if (typeof window !== 'undefined') {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//   }
//   return config;
// }, (error) => {
//   return Promise.reject(error);
// });

axiosCustomerConfig.interceptors.response.use(
  async (response) => {
    const code = response.data.code
    if (code == 401) {
      const res_refresh:ResponseData  = await axiosCustomerConfig.post("/Auth/RefreshToken")
      const code_res = res_refresh.code
      if (code_res == 200) {
        return axiosCustomerConfig
      }else{
        localStorage.clear()
        sessionStorage.clear()
      }
    }
    const data = response.data;
    return data;
  },
  async (error) => {
    if (error.response) {

      if (error.response.status === 401) {
        await axiosCustomerConfig.post("/Auth/RefreshToken")
        return axiosCustomerConfig

      } else {
        localStorage.clear();
        return Promise.reject(error.response.data);
      }
    }

    // lỗi kết nối mạng
    if(error.code == "ERR_NETWORK"){
      return Promise.resolve({code: 500, data: [], message: "Lỗi kết nối mạng"})
    }

  }

);

export const postFormData = (url: string, data: any) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return axiosCustomerConfig.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
}

export default axiosCustomerConfig;
