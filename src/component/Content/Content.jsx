import React from "react";
import ActivitiesCard from "../ActivitiesCard/ActivitiesCard";
import "./Content.css";
// import { PersonalData } from "../../Store Data/Personaldata";

// import { useState, useEffect } from "react";
// import { getActivities } from "../../api/activity.js"
// import { useContext } from "react";
// import { UserContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";
// import { deleteActivity } from '../../api/activity.js'

const Content = (props) => {

  // const [activities, setActivities] = useState([])ขอเปิดไมค์แปบ

  return (
    <div className=" content-container">
      {
        props.fiterActivities.map((value) => {
          return <ActivitiesCard key={value._id}
            activitiesDeatils={value} handleDelete={props.handleDelete} />
        })

      }
      {/* <ActivitiesCard activitiesDeatils={activityInfo} /> */}
    </div>
  );
};

export default Content;
