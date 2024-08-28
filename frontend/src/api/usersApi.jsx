import axios from "axios";

const usersApi = axios.create({
    baseURL: "http://localhost:3000"
})

 export const  createUsers = async () => {
    const res = await usersApi.post ('/users')
    return res.data;
}