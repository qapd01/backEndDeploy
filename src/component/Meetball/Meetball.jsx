import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import meetballmenu from "../../assets/meatball_2.png"
import './Meetball.css'


const Meetball = () => {
    const [isShow, setIsShow] = useState(false)
    const handlestate = () => {
        setIsShow(true)

    }



    return (


        <div className='meetballMenu' onClick={handlestate}  > <img src={meetballmenu} />{
            isShow ?
                <div className='edit-section  '>
                    <Link to='/AddActivity'>
                        <button>
                            edit
                        </button>
                    </Link>
                    {/* </Link> */}
                    <button>
                        delete
                    </button>
                </div> : null
        }  </ div >
    )
}

export default Meetball