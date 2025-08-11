import './App.css'
import Home from "./Home"
import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import TypeTest from './TypeTest'
import { useState } from 'react'

export default function App() {

  const [Data, setData] = useState({ "typePractice": "", "time": 0, "row": "" })

  function getData(data) {
    const y = {
      "typePractice": (data["typePractice"] || "") + Data["typePractice"],
      "time": (+data["time"] || 0) + Data["time"],
      "row": (data["row"] || "") + Data["row"]
    }
    setData(y)
  }

  return (
    <div className='w-screen h-screen'>
      <Navbar pushdataReset={setData} />
      <Routes>
        <Route path='/' element={<Home pushData={getData} />} ></Route>
        <Route path='TypeTest' element={<TypeTest data={Data} />} ></Route>
        <Route path='typeResult' element={<TypeTest />} ></Route>
      </Routes>

    </div>
  )

}


