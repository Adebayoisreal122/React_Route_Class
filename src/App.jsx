import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Routes,Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'


import './App.css'
import Contact from './components/Contact';
import VanDetails from './components/Van/VanDetails';
import VanPrice from './components/Van/VanPrice';
import VanIncome from './components/Van/VanIncome';
import Layout from './components/Layout';
import Frontend from './components/frontend';


function App() {
  const [count, setCount] = useState(0)

  return (
 
  
    <Routes>
        <Route path='/' element={<Layout />} >
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="contact" element={<Contact />} />
            <Route path="api" element={<Frontend/>} />

          <Route path="van" element={<VanDetails/>}>
            <Route path="price" element={<VanPrice />} />
            <Route path="income" element={<VanIncome />} />
          </Route>
        </Route>
    </Routes>
  )
}

export default App
