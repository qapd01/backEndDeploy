import React from 'react'
import "./ActivitiesManual.css"
import ActivitiesForm from '../ActivitiesForm/ActivitiesForm'
import { Link } from 'react-router-dom'

const ActivitiesManual = () => {
    return (


        <div className="manualCard">
            <h1>Manual Activity</h1>
            <ActivitiesForm />
        </div>

    )
}

export default ActivitiesManual