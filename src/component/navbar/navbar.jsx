import React from 'react'
import './navbar.css'
import profilePic from '../../assets/ProfilePic.svg'
import { Link } from 'react-router-dom'

const navbar = () => {
    return (

        <nav>
            <div className='navMain'>
                <div className='navbar-left'>
                    <ul>
                        <Link to='/dashboard'>

                            <a><li>Dashboard</li></a></Link>
                        <Link to='/Profile'>
                            <a><li>Setting</li></a> </Link>
                        <Link to='/AddActivity'>
                            <a><li>Activity</li></a> </Link>



                    </ul>
                </div>
                <div className='navbar-right'>
                    <img src={profilePic} alt="" />
                </div>
            </div>

        </nav >


    )
}

export default navbar