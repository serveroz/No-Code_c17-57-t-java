import axios from "axios";

const employeesApi = axios.create({
    baseURL: "http://localhost:3000"
})

 export const getEmployees = async () => {
    const res = await employeesApi.get ('/employees')
    return res.data;
}

