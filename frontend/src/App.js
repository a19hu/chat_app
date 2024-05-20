import React, { useEffect } from 'react'
import './App.css';
import axios from 'axios'

import { Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';
function App() {
  const fetchdata= async()=>{

  const data = await axios.get('api')

  console.log(data)
}


useEffect(() => {
  fetchdata()
}, [])
  return (
    <div className="App">
      <Routes>
   <Route path="/" element={<Homepage />} />
   <Route path="/course" element={<Chatpage />} />
</Routes>
    </div>
  );
}

export default App;
