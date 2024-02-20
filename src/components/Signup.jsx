
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Signup = () => {


   
    let URL = "http://localhost:4000/register";
      const [firstName, setFirstName] = useState("");
      const [secondName, setSecondName] = useState("");
      const [userName, setUserName] = useState("");
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const Navigate = useNavigate();
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post(URL, {
        firstName, secondName, userName, email, password
      }
      ).then((res) => {
        console.log(res);
      Navigate('/signin');
      }
      ).catch((err) => {
        console.log(err);
      })}

  return (

    <>


<center>
        <form  onSubmit={handleSubmit} className="form">
            <p className="title">Register </p>
            <p className="message">Signup now and get full access to our app. </p>
                <div className="flex">
                <label>
                    <input name="firstName" required="" placeholder="" value={firstName} type="text" onChange={(e) => setFirstName (e.target.value)} className="input"/>
                    <span>Firstname</span>
                </label>
        
                <label>
                    <input name="secondName" required="" placeholder="" value={secondName} type="text" onChange={(e) => setSecondName (e.target.value)} className="input"/>
                    <span>Lastname</span>
                </label>
                
            </div>  
            
            <label>
                <input name="userName" required="" placeholder="" value={userName} type="text" onChange={(e) => setUserName (e.target.value)} className="input"/>
                <span>Username</span>
            </label> 

            <label>
                <input name="email" required="" placeholder="" value={email} type="email" onChange={(e) => setEmail (e.target.value)} className="input"/>
                <span>Email</span>
            </label> 
                
            <label>
                <input name="password" required="" placeholder="" value={password} type="password" onChange={(e) => setPassword (e.target.value)} className="input"/>
                <span>Password</span>
            </label>
            <button type="submit"  className="submit">Submit</button>
            <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
        </form>
    </center>
    </>
  )
}

export default Signup