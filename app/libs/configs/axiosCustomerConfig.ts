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
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/';
        }
        return Promise.reject(error.response.data);
      }
    }
    if (error.response.status === 403) {
      window.location.href = "/"
    }
    return Promise.reject(error.response.data);
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
