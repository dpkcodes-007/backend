import axios from 'axios'

const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL
})

export const registerData = (fromBE) =>{
    return api.post("/register",fromBE)
}

export const loginData = (fromBE)=>{
    return api.post("/login",fromBE)
}