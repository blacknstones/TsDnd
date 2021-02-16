import axios, { AxiosInstance } from "axios";

const BASE_URL: string = "http://localhost:4000";

// create axios instance 
const Api: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});

export default Api;