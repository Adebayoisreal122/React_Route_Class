import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    let URL = "http://localhost:4000/signin";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const Navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(URL, {
            email, password
        }).then((res) => {
            const { status, message, user, token } = res.data; // Assuming response structure from server
            console.log(res);
            if (status) {
                // Handle successful signin
                localStorage.setItem('token', token); // Assuming you want to store the token in localStorage
                Navigate('/home');
            } else {
                // Handle failed signin
                console.log(message);
            }
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <>
            <center>
                <form onSubmit={handleSubmit} className="form">
                    <p className="title">Signin</p>
                    <p className="message">Sign in to your account</p>

                    <label>
                        <input name="email" required="" placeholder="" value={email} type="email" onChange={(e) => setEmail(e.target.value)} className="input" />
                        <span>Email</span>
                    </label>

                    <label>
                        <input name="password" required="" placeholder="" value={password} type="password" onChange={(e) => setPassword(e.target.value)} className="input" />
                        <span>Password</span>
                    </label>
                    <button type="submit" className="submit">Submit</button>
                    <p className="signin">You don't have an account? <a href="#">Sign Up</a> </p>
                </form>
            </center>
        </>
    );
};

export default Signin;
