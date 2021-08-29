import axios, { AxiosInstance, AxiosResponse } from "axios";

const BASE_URL: string = "http://localhost:4000";

// create axios instance 
const Api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
});

Api.interceptors.request.use((config) => {
    
})

const handleResponse = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string) => 
}

export default Api; 