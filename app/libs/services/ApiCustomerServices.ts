import axios from "axios";
import axiosCustomerConfig from "../configs/axiosCustomerConfig";

const baseUrl = "https://api.vuacontent/api/v1"

const axiosCustomer = axios.create({
    baseURL: baseUrl,
    withCredentials: true
});

// Add response interceptor
axiosCustomer.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 401) {
            await axiosCustomer.post('/Auth/RefreshToken')
            return axiosCustomerConfig
        }
        if (error.response?.status === 403){
            return Promise.resolve(error.response)
        }
        return Promise.reject(error);
    }
);

const login = async (email: string, password: string) => {
    const res = await axiosCustomer.post(`/Auth/Login`, {
        email,
        password
    }, {
        headers: {
            "Content-Type": "application/json"
        }
    });
    return res.data;
}

// api với user
const GetInfo = async () => {
    try {
        const res = await axiosCustomer.get(`/customer/get-info`);
        return res.data;
    } catch (error) {
        console.log(error);
        return null;
    }
}



export { login, GetInfo };

