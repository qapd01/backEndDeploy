import React from 'react'
import Header from './component/Header/Header'
import Toolbar from './component/Toolbar/Toolbar'
import Navbar from './component/navbar/navbar'

import './Dashboard.css'

import { useState, useEffect } from "react";
import { getActivities } from "../src/api/activity.js"
import { useContext } from "react";
import { UserContext } from "./component/context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { deleteActivity } from '../src/api/activity.js'
import { getMe } from '../src/api/Users.js'
import { getTotal } from '../src/api/activity.js'
import { activitiesByDate } from '../src/api/activity.js'




const DashBoard = () => {
    const [activities, setActivities] = useState([])
    const [userinfo, setUserinfo] = useState([])
    const [total, setTotal] = useState([])
    const { user } = useContext(UserContext);

    const getActivitiesList = async () => {
        // setActivities(props.Dateselect)
        if (!activities) {
            return
        } const response = await getActivities()
        if (!response.data?.result?.length) return
        setActivities(() => [...response.data.result])
    };

    const handleDelete = async (id) => {
        if (typeof id === 'undefined') return
        await deleteActivity(id)
        await getActivitiesList()


    }

    const getMefunc = async () => {
        const response = await getMe()
        setUserinfo(response.data.result)
    };

    const [selectDate, setSelectDate] = useState(new Date())
    let selectByDate = []

    const handleSetDate = async (e) => {

        setSelectDate(e.target.value)
        selectByDate = await activitiesByDate(e.target.value)

        console.log(selectByDate.data.result)
        setActivities(selectByDate.data.result)
    }




    useEffect(() => {
        if (user) {
            getMefunc()
            getActivitiesList()
            // geTotalfunc()
            return;
        }
        if (user === null) {
            window.location = '/';
        }

    }, [user]);

    useEffect(() => {
        geTotalfunc()
    }, [activities])


    const date = new Date().toISOString().split('T')[0]
        ;
    const geTotalfunc = async () => {
        const response = await getTotal(date)
        setTotal(response.data.result[0])

        // console.log("res", response)
        // console.log("agrr", total)
    };
    console.log(total)

    return (
        <div>
            <Navbar />
            <div className='Header-section'>

                <Header
                    userinfo={userinfo}
                    total={total} />
            </div>
            <Toolbar activities={activities}
                handleDelete={handleDelete}
                handleSetDate={handleSetDate}
            />
        </div>
    )
}

export default DashBoard