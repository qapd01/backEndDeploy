import axios from "axios";
export const host = 'https://backended-deploy.vercel.app'

export const api = axios.create({
    baseURL: `${host}/api/v1`
})
