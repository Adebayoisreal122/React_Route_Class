import React, { useState } from 'react';
import axios from 'axios';

const Signin = () => {
    let URL = "http://localhost:4000/signin";

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(URL, {
            email, password
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    };

    return (
        <>
            <center>
                <form onSubmit={handleSubmit} className="form">
                    <p className="title">Signin </p>
                    <p className="message">Sign in to your account </p>

                    <label>
                        <input name="email" required="" placeholder="" value={email} type="email" onChange={(e) => setEmail (e.target.value)}  className="input"/>
                        <span>Email</span>
                    </label>

                    <label>
                        <input name="password" required="" placeholder="" value={password} type="password" onChange={(e) => setPassword (e.target.value)}  className="input"/>
                        <span>Password</span>
                    </label>
                    <button type="submit" className="submit">Submit</button>
                    <p className="signin">You don't have an acount ? <a href="#">Sign</a> </p>
                </form>
            </center>
        </>
    );
};

export default Signin;
