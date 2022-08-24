import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { async } from '@firebase/util';
import { UserAuth } from './component/context/AuthContext';
import { createProfile } from './api/Users.js'
import SingUpPagePic from '../src/assets/SingUpPagePic.jpg'


const Singuppage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const { createUser } = UserAuth()
    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            await createUser(email, password);

            await createProfile(email)
            console.log(email)
            navigate('/Profile')

        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    }
    return (<div class="back-ground">
        <img src={SingUpPagePic} alt="ProfilePicSetting" className='ProfilePic' />
        <div class="container">
            <h1>Sign up</h1>
            <form onSubmit={handleSubmit}>
                <div class="txt_field">
                    <input type="email" clasNames="form-control" id="exampleInputEmail1" required onChange={(e) => setEmail(e.target.value)} />
                    <span></span>
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                </div>
                <div class="txt_field">
                    <input type="password" className="form-control" id="exampleInputPassword1" required onChange={(e) => setPassword(e.target.value)} />
                    <span></span>
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                </div>
                <input type="submit" value="Sign up" />
                <div class="signup_link">
                    Already have an account? <a href='/login'>Login</a>
                </div>
            </form>
        </div>
    </div>
    )
}



export default Singuppage