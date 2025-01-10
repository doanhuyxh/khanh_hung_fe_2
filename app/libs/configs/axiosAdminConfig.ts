import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${process.env.API_URL}/api/v1/admin`,
  timeout: 20000,
  headers: {
    "Content-Type": "application/json"
  }
});

export const postFormData = (url: string, data: any) => {
  const formData = new FormData();
  for (const key in data) {
    formData.append(key, data[key]);
  }
  return axiosInstance.post(url, formData, {
    headers: { "Content-Type": "multipart/form-data" }
  });
};

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    const code = response.data.code;
    if (code == 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      const res_refresh: any = await axiosInstance.post("/auth/RefreshToken", {
        headers: {
          RefreshToken: `${refreshToken}`
        }
      });
      const code_res = res_refresh.code;
      if (code_res != 200) {
        localStorage.clear();
        window.location.href = "/admin_web/auth/login";
      } else {
        localStorage.setItem("accessToken", res_refresh.data.accessToken);
        localStorage.setItem("refreshToken", res_refresh.data.refreshToken);
        return axiosInstance;
      }
    }
    if (code == 403) {
      window.location.href = "/admin_web/auth/login";
    }
    const data = response.data;
    return data;
  },
  async (error) => {
    const res_data: any = {};

    if (error.status === 404) {
      res_data.code = 404;
      res_data.message = "Not found";
      res_data.data = {};
    }

    if (error.status === 401) {
      await axiosInstance.post("/auth/RefreshToken");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return Promise.resolve(res_data);
    }
    localStorage.setItem("error", JSON.stringify(error));
    if (error.status === 403) {
      window.location.href = "/admin_web/auth/login";
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;
