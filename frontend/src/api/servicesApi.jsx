import axios from "axios";

const servicesApi = axios.create({
    baseURL: "http://localhost:3000"
})

 export const getServices = async () => {
    const res = await servicesApi.get ('/services')
    return res.data;
}