import React from 'react'
import './DailyResult.css'

import { useState, useEffect } from 'react'
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { getTotal } from '../../api/activity.js'
//Try to use memo
const DailyResult = (props) => {

    // const date = new Date().toISOString().split('T')[0]
    //     ;
    const date2 = new Date().toLocaleDateString()

    // const [total, setTotal] = useState([])
    const { user } = useContext(UserContext);

    // const geTotalfunc = async () => {
    //     const response = await getTotal(date)
    //     setTotal(response.data.result[0])

    //     // console.log("res", response)
    //     // console.log("agrr", total)
    // };





    // useEffect(() => {
    //     if (user) {
    //         geTotalfunc()
    //         return;
    //     }
    //     if (user === null) {
    //         window.location = '/';
    //     }
    // }, [user]);



    return (
        <div className='daily-result-container'>
            <div className='dashboard-headline'><h1>Daily Result </h1><h2>{date2}</h2></div>

            <div className='dashboard-info-container'>

                <div className='dashboard-info'>
                    <h2>
                        Total Duration
                    </h2>
                    <p>
                        {props.total && props.total.total_duration}
                    </p></div>
                <div className='dashboard-info'>
                    <h2>
                        Calories Burned
                    </h2>
                    <p>
                        {props.total && props.total.total_calories}
                    </p>

                </div>
            </div>

        </div>)
}

export default DailyResult