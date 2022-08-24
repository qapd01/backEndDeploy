import ChangeProfile from '../ChangeProfile/ChangeProfile'
import ProfileForm from '../ProfileForm/ProfileForm'
import { useNavigate } from 'react-router-dom'
import React from 'react'

import './ProfileEdit.css'
import { UserAuth } from '../context/AuthContext'

const ProfileEdit = () => {
  const { logout } = UserAuth();
  const navigate = useNavigate();
  const handleChangeProfile = () => {
    return alert('save')
  }

  const handleLogout = async () => {
    try {
      await logout()
      navigate('/')
      console.log("ออกได้แล้วจ้า")
    } catch (e) {
      console.log(e.message)
    }
  }


  return (


    <div className='profileEdit'>
      <h1>Setting</h1>
      <div className='profileEdit-body'>
        <ChangeProfile />
        <ProfileForm />
      </div>

      <div className='button-container'>

      </div>
      <div className='button-container'>
        <button className='saveButton' onClick={handleLogout}>Logout</button>
      </div>

    </div>

  )
}

export default ProfileEdit
