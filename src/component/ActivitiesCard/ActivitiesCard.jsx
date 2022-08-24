import React from 'react'
import "./ActivitiesCard.css"
import { useState } from 'react'
import meatballmenu from '../../assets/meatball_2.png'
import '../Meetball/Meetball.css'
import run from '../../assets/running.png'
import bike from '../../assets/bicycle.png'
import hike from '../../assets/hiking.png'
import swim from '../../assets/swimmer.png'
import walk from '../../assets/walking.png'

import { Link, useNavigate } from 'react-router-dom'




const ActivitiesCard = (props) => {
    const activityDetail = props.activitiesDeatils
    const [isShow, setIsShow] = useState(false)


    const handlestate = () => {
        setIsShow(true);

    };

    const handleRemove = () => {
        setIsShow(false)

    };




    return (
        <div className='display-card'>

            <div className='ActivityCard'  >
                <div className='activity-namelable' >
                    <h2>{activityDetail.type}</h2>
                    <div className='freespace' onClick={handleRemove}></div>
                    <div className='meetballMenu' onClick={handlestate}  > <img src={meatballmenu} />{
                        isShow ?
                            <div className='edit-section  '>
                                <Link to={`/AddActivity/${activityDetail._id}`}>
                                    <button>
                                        edit
                                    </button>
                                </Link>

                                <button onClick={() => { props.handleDelete(activityDetail._id) }} >
                                    delete
                                </button>
                            </div> : null
                    }  </ div >
                </div>
                <div onClick={handleRemove}>
                    <div className='datasection'  >
                        {/* <p >{activityDetail.date.slice(0, 10)}</p> */}
                        <p >{new Date(activityDetail.date).toLocaleDateString()}</p>
                    </div>
                    <h1>{activityDetail.title}</h1>
                    <div className="activitypicmain">
                        {
                            activityDetail.type === 'run' ? <img src={run} /> :
                                activityDetail.type === 'walk' ? <img src={walk} /> :
                                    activityDetail.type === 'bike' ? <img src={bike} /> :
                                        activityDetail.type === 'swim' ? <img src={swim} /> :
                                            activityDetail.type === 'hike' ? <img src={hike} /> : null


                        }
                    </div>
                    <p>{activityDetail.description}</p>
                    <footer>
                        <h3>calories {activityDetail.calories}  </h3><span>🔥</span>
                    </footer>





                </div>

            </div>


        </div >
    )
}

export default ActivitiesCard