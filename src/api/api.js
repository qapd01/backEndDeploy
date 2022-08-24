import axios from "axios";
export const host = 'https://back-cyan.vercel.app'

export const api = axios.create({
    baseURL: `${host}/api/v1`
})
