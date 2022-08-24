import React from 'react'
import './ActivitiesForm.css'
import { useState, useEffect } from 'react'
import { createActivity, getActivityById, updateActivity } from '../../api/activity.js'
import { useNavigate, useParams } from "react-router";

const ActivitiesForm = () => {

    const navigate = useNavigate()

    const param = useParams()
    const [activityInfo, setActivityInfo] = useState({
        calories: "",
        title: "",
        type: "",
        date: "",
        duration: "",
        description: ""

    })

    const setupActivityForm = async () => {
        const response = await getActivityById(param.activityId)
        const result = response.data.result
        console.log(result)
        setActivityInfo(result)

    }
    useEffect(() => {
        if (param?.activityId) {
            setupActivityForm()
        }
    }, [param?.activityId])

    const handleCancle = () => {
        navigate('/dashboard')
    }

    const handleChange = (event) => {
        const value = event.target.value;
        setActivityInfo({
            ...activityInfo,
            [event.target.name]: value,

        });
    }


    const handleSubmit = async (event) => {
        if (activityInfo.type === "run") {
            activityInfo.calories = activityInfo.duration * 9.6
        } else if (activityInfo.type === "bike") {
            activityInfo.calories = activityInfo.duration * 8.4
        } else if (activityInfo.type === "swim") {
            activityInfo.calories = activityInfo.duration * 6.6
        } else if (activityInfo.type === "walk") {
            activityInfo.calories = activityInfo.duration * 5
        } else if (activityInfo.type === "hike") {
            activityInfo.calories = activityInfo.duration * 7.2
        }

        console.log(activityInfo)

        try {
            event.preventDefault()
            if (param?.activityId) {
                await updateActivity(param.activityId, activityInfo)


            } else {
                await createActivity(activityInfo)

            }

            console.log(activityInfo)
        } catch (e) {

            console.log(e.message);
        }
        alert('Send Activities')
        navigate('/dashboard')
    }

    return (

        <div>
            <form className='activity-form' onSubmit={handleSubmit}>
                <div className="fromcard">
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="title">Name </label>
                        </div>
                        <input type="text" name="title"
                            value={activityInfo.title}
                            onChange={handleChange} required />
                    </div>
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="date" >Date </label>
                        </div>
                        <input id='date' type="date" name="date"
                            value={activityInfo.date}
                            onChange={handleChange} required />
                    </div>
                    <div className="manualLable">
                        <div className="lableName">
                            <label for="type">Type </label>
                        </div>
                        <select name="type" value={activityInfo.type}
                            onChange={handleChange} required>
                            <option value="">Choose Your Activity Type</option>
                            <option value="run">Run</option>
                            <option value="walk">Walk</option>
                            <option value="bike">Bicycle</option>
                            <option value="swim">Swim</option>
                            <option value="hike">Hike</option>
                        </select>
                    </div>

                    <div className="manualLable">
                        <div className="lableName">
                            <label for="duration">Duration </label>
                        </div>
                        <input type="number" name="duration" min={0}
                            value={activityInfo.duration}
                            onChange={handleChange} required />
                    </div>

                    <div className="manualLable">
                        <div className="lableName">
                            <label for="description">Description </label>
                        </div>
                        <textarea id="description" rows="6" cols="25" name="description"
                            value={activityInfo.description}
                            onChange={handleChange} ></textarea>
                    </div>
                </div>

                <div className="summitCard">

                    <button type="submit">Save</button>
                </div>
            </form>
            <div className="summitCard "> <button onClick={handleCancle}>Cancel</button> </div>

        </div>
    )
}

export default ActivitiesForm