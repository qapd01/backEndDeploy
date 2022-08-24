import { Link } from "react-router-dom";
import Content from "../Content/Content";
import { activitiesByDate } from '../../api/activity.js'



import "./Toolbar.css";

import { useState, useEffect } from "react";
import { getActivities } from "../../api/activity.js"
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { deleteActivity } from '../../api/activity.js'

const activitieList = [
  {
    name: "All",
    value: "all",
  },
  {
    name: "Run",
    value: "run",
  },
  {
    name: "Walk",
    value: "walk",
  },
  {
    name: "Bicycle",
    value: "bike",
  },
  {
    name: "Swim",
    value: "swim",
  },
  {
    name: "Hike",
    value: "hike",
  },
];




const Toolbar = (props) => {
  const [showActivities, setShowActivities] = useState("all");
  // const [activities, setActivities] = useState([])
  // const { user } = useContext(UserContext);


  // const [selectDate, setSelectDate] = useState(new Date())
  // let selectByDate = []

  // const handleSetDate = async (e) => {

  // setSelectDate(e.target.value)
  // selectByDate = await activitiesByDate(e.target.value)

  // console.log(selectByDate.data.result)
  // setShowActivities(selectByDate.data.result)
  // }


  const handleShowActivities = (e) => {
    return setShowActivities(e.target.value);
  };

  // console.log(showActivities)




  // const getActivitiesList = async () => {
  //   // setActivities(props.Dateselect)
  //   if (!activities) {
  //     return
  //   } const response = await getActivities()
  //   if (!response.data?.result?.length) return
  //   setActivities(() => [...response.data.result])
  // };

  // const handleDelete = async (id) => {
  //   if (typeof id === 'undefined') return
  //   await deleteActivity(id)
  //   await getActivitiesList()


  // }

  // useEffect(() => {
  //   if (user) {
  //     getActivitiesList()
  //     return;
  //   }
  //   if (user === null) {
  //     window.location = '/';
  //   }
  // }, [user]);


  const fiterActivities = props.activities.filter((activity, idx) => {
    if (
      activity.type === showActivities ||
      showActivities === "all"
    ) {
      return activity;
    }
  });



  return (
    <div >
      <div className="toolbar-container">
        <div className="toolbar-head">
          <h1>Your Activities</h1>
        </div>
        <div className="toolbar-bottom">
          <div className="toolbar-bottom-left">
            {activitieList.map((name, index) => (
              <button
                key={index}
                className="toolbar-activities"
                onClick={handleShowActivities}
                value={name.value}
              >
                {name.name}
              </button>
            ))}
          </div>
          <div className="toolbar-bottom-right">
            <input type="date" id="chooseDay" onChange={props.handleSetDate} />
            <Link to="/AddActivity">
              <button className="addData" ><p>Add your data</p></button>
            </Link>
          </div>
        </div>
      </div>

      <div>
        <Content
          fiterActivities={fiterActivities}
          handleDelete={props.handleDelete}
        />
      </div>
    </div>
  );
};

export default Toolbar;
