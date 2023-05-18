import { useState } from 'react'

import './App.css'
// --chart common file import ---
import { Chart as ChartJs } from 'chart.js/auto'
// --charts--
import BarChart from './components/charts/BarChart'
import LineChart from './components/charts/LineChart'
import PieChart from './components/charts/PieChart'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Charts</h1>
      <div className="chartsContainer">
        <BarChart />
        <LineChart />
        <PieChart />
      </div>
    </>
  )
}

export default App
