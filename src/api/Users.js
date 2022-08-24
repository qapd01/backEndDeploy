import { getAuth } from "firebase/auth";
import axios from "axios";
import { api } from "./api.js";
import { async } from "@firebase/util";

export const getMe = async () => {
    const auth = getAuth()
    if (!auth.currentUser) throw new Error('Unauthorized')
    const token = await auth.currentUser.getIdToken(true)
    console.log({ token })
    return api.get('/users/me', {
        headers: {
            Authorization: token
        }
    })
};

export const updateProfile = async ({ name, gender, birthdate, height, weight }) => {
    const auth = getAuth()
    const token = await auth.currentUser.getIdToken(true)
    console.log({ name, gender, birthdate, height, weight })
    return api.put('/users/me', { name, gender, birthdate, height, weight }, {
        headers: {
            Authorization: token
        }
    })
}




export const createProfile = async ({ name }) => {
    const auth = getAuth()
    const token = await auth.currentUser.getIdToken(true)
    return api.post('/users/me', { name }, {
        headers: {
            Authorization: token
        }
    })
};
