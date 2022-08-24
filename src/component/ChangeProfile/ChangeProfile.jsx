
import Profilepic from '../../assets/profilepic.jpg';

import React from 'react'

import './ChangeProfile.css'

const ChangeProfile = () => {

  return (
    <div className='changeProfile'>
      <img src={Profilepic} className='ProfilePic' />
      <a href='https://www.freepik.com/vectors/gym-illustration'>Gym illustration vector created by storyset - www.freepik.com</a>

    </div>
  )
}

export default ChangeProfile
