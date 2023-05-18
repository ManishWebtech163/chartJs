import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { numbersData } from '../../apis/numbersData'
export default function LineChart() {
    const [apiData, setapiData] = useState([])
    const setDataFun = () => {
        numbersData.map((e, index) => {
            if (index < 20) setapiData((pre) => [...pre, e])
            console.log(apiData)
        })
    }
    useEffect(() => {
        setDataFun()
    }, [])

    const dataApi = {
        labels: apiData?.map(e => e.date),
        datasets: [
            {
                label: "hii",
                data: apiData?.map(e => e.value)
            }
        ]
    }
    return (
        <div className="lineChart">
            <Line data={dataApi} />
        </div>
    )
}
