import React from 'react'
import ProfileEdit from './component/ProfileEdit/ProfileEdit'
import Navbar from './component/navbar/navbar'


import './profile.css'

const Profile = () => {
    return (
        <div>
            <Navbar />
            <div className='profile'>
                <ProfileEdit />
            </div>
        </div>

    )
}

export default Profile