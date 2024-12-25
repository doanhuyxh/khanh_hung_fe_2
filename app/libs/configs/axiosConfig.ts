import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.vuacontent.vn/api/v1/admin',
  timeout: 20000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export const postFormData = (url: string, data: any) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return axiosInstance.post(url, formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

axiosInstance.interceptors.response.use(
  async (response) => {
    const code = response.data.code
    if (code == 401){
      const refreshToken = localStorage.getItem("refreshToken")
      const res_refresh:any = await axiosInstance.post("/auth/RefreshToken", {
        headers: {
          "RefreshToken": `${refreshToken}`
        }
      })
      const code_res = res_refresh.code
      if (code_res != 200){
        localStorage.clear()
        window.location.href = "/admin_web/auth/login"
      }else{
        return axiosInstance
      }
    }
    if (code == 403){
      window.location.href="/admin_web/auth/login"
    }
    const data = response.data;
    return data;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        await axiosInstance.post("/auth/RefreshToken")
        await new Promise(resolve => setTimeout(resolve, 2000)); // Wait 2 seconds
        return axiosInstance
      }

      // Handle 403 - Insufficient permissions
      if (error.response.status === 403) {
        window.location.href = "/admin_web/auth/login";
      }

      return Promise.reject(error.response.data);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
