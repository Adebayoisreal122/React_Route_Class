import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'


import './App.css'
import Contact from './components/Contact';
import Layout from './components/Layout';
import Frontend from './components/frontend';
import Signup from './components/signup';
import FormikSignup from './components/Formik';
import Signin from './components/Signin';
import Counter from './components/Counter';
import UserAuthentication from './components/UserAuthentication';



function App() {
  const [count, setCount] = useState(0)

  return (
 
  
    <Routes>
        <Route path='/' element={<Layout />} >
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="api" element={<Frontend/>} />
            <Route path="redux" element={<Counter/>} />
            <Route path="user" element={<UserAuthentication/>} />

            <Route path="signup" element={<Signup/>} />
            <Route path="formik" element={<FormikSignup/>} />
            <Route path="signin" element={<Signin/>} />



        </Route>
    </Routes>
  )
}

export default App
