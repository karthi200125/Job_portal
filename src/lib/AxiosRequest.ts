import axios from "axios";

export const Axiosrequest = axios.create({
    baseURL:"http://localhost:3000/api/"
})