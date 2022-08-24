
import React from 'react'
import './ProfileForm.css'
import { useState, useRef, useCallback, useEffect } from "react";
import { UserAuth } from '../context/AuthContext';
import { updateProfile } from '../../api/Users'
import { async } from '@firebase/util';
import { useContext } from "react";
import { UserContext } from "../context/AuthContext";
import { getMe } from '../../api/Users.js'
import { useNavigate } from 'react-router-dom';

const ProfileForm = () => {

    const navigate = useNavigate()
    // const { user } = useContext(UserContext);

    const user = UserAuth().user.email

    const [userInfo, setUserInfo] = useState({
        name: "",
        birthdate: "",
        gender: "",
        height: "",
        weight: "",
    });


    const handleChange = (event) => {
        const value = event.target.value;
        setUserInfo({
            ...userInfo,
            [event.target.name]: value,

        });
    }

    const getMefunc = async () => {
        const response = await getMe()

        const birthdate = response.data.result.birthdate.split('T')[0]
        console.log("birtdate," + birthdate)

        setUserInfo({
            name: response.data.result.name,
            birthdate: birthdate,
            gender: response.data.result.gender,
            height: response.data.result.height,
            weight: response.data.result.weight,
        }
        )
    };


    useEffect(() => {
        if (user) {
            getMefunc()
            return;

        }
        if (user === null) {
            window.location = '/';
        }

    }, [user]);

    console.log(userInfo)


    const onSubmit = async (event) => {
        // const birthdate = dayjs(values.birthdate).toISOString();

        try {
            event.preventDefault()
            await updateProfile(userInfo)
            alert('Update profile success')
            navigate('/dashboard')

        } catch (err) {
            alert('Update profile failed')
        }
    }



    return (

        <div className='input-container' >


            <form onSubmit={onSubmit}>

                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="name" >Name</label>
                    </div>

                    <input type="text" id="name" placeholder="Input your name" name="name"

                        value={userInfo.name}
                        onChange={handleChange}
                        required />
                    {/* <span className='input-span'>should be input&shouldn't be special character</span> */}
                </div>


                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="birthdate">Birthday</label>
                    </div>
                    <input type="date" id="birthdate" placeholder="Select your birthday" name="birthdate"
                        value={userInfo.birthdate}
                        onChange={handleChange} required />
                </div>

                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="gender">Gender</label>
                    </div>
                    <select className='genderSelect' name="gender"
                        value={userInfo.gender}
                        onChange={handleChange}>
                        <option value="" >Select your Gender</option>
                        <option value="male">Male</option>
                        <option value="feMale">FeMale</option>
                    </select>
                </div>

                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="height">Height</label>
                    </div>
                    <input type="text" id="name" placeholder="Input your height" name="height"
                        value={userInfo.height}
                        onChange={handleChange} required />
                    {/* <span>Height should be centimeter</span> */}
                </div>

                <div className='manualLabel'>
                    <div className='labelName'>
                        <label for="weight">Weight</label>
                    </div>
                    <input type="text" id="name" placeholder="Input your weight" name="weight"
                        value={userInfo.weight}
                        onChange={handleChange} required />
                    {/* <span>Weight should be kilogram</span> */}
                </div>
                <button className="saveButton" type="submit">
                    Save
                </button>

            </form>

        </div>
    )
}

export default ProfileForm
