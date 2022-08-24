import { getAuth } from "firebase/auth";
import { api } from "./api.js";
// import dayjs from "dayjs";
// import {timeToSecond} from "../libs/date.js";
import app from "../config"
import { async } from "@firebase/util";


export const createActivity = async ({ title, date, duration, type, calories, description }) => {
    const auth = getAuth(app)
    if (!auth.currentUser) throw new Error('Unauthorized')
    const token = await auth.currentUser.getIdToken(true)

    return api.post('/activities', {
        title,
        date,
        duration,
        type,
        calories,
        description
    }, {
        headers: {
            Authorization: token
        }
    })
}


export const getActivities = async () => {
    const auth = getAuth(app)
    if (!auth.currentUser) throw new Error('Unauthorized')
    const token = await auth.currentUser.getIdToken(true)
    return api.get('/activities', {
        headers: {
            Authorization: token
        }
    })
}

export const getActivityById = async (id) => {
    const auth = getAuth()
    if (!auth.currentUser) throw new Error('Unauthorized')
    const token = await auth.currentUser.getIdToken(true)
    return api.get(`/activities/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

export const updateActivity = async (id, { title, date, duration, type, calories, description }) => {
    const auth = getAuth()
    if (!auth.currentUser) throw new Error('Unauthorized')
    const token = await auth.currentUser.getIdToken(true)

    return api.put(`/activities/${id}`, {
        title,
        date,
        duration,
        type,
        calories,
        description
    }, {
        headers: {
            Authorization: token
        }
    })
}





export const deleteActivity = async (id) => {
    const auth = getAuth()
    if (!auth.currentUser) throw new Error('Unauthorized')
    const token = await auth.currentUser.getIdToken(true)
    return api.delete(`/activities/${id}`, {
        headers: {
            Authorization: token
        }
    })
}

export const getTotal = async (date) => {
    const auth = getAuth()
    if (!auth.currentUser) throw new Error('Unauthorized')
    const token = await auth.currentUser.getIdToken(true)
    return api.get(`/aggregates/?date=${date}`, {
        headers: {
            Authorization: token
        }
    })

}


export const activitiesByDate = async (date) => {
    const auth = getAuth()
    if (!auth.currentUser) throw new Error('Unauthorized')
    const token = await auth.currentUser.getIdToken(true)
    return api.get(`/activities/?date=${date}`, {
        headers: {
            Authorization: token
        },
    },
        {
            params: {
                date: `$(date)`
            }
        })
}