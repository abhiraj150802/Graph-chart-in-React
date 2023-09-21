
import { Route, Routes } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Home from "./components/Home"

import PieChart from "./components/PieChart"
import BarChart from "./components/BarChart"
import LineChart from "./components/LineChart"





const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/barchart" element={<BarChart />} />
        <Route path="/linechart" element={<LineChart />} />
        <Route path="/piechart" element={<PieChart />} />
        {/* </Route> */}

        {/* aha nested routing kiye hai ,isliye navbar mai outlet ka use karenge */}
      </Routes>
    </>
  )
}

export default App
