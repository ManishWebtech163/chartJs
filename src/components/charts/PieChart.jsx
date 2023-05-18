import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { numbersData } from '../../apis/numbersData'

export default function PieChart() {

    const [dataApi, setdataApi] = useState([])

    useEffect(() => {
        numbersData?.map((e, ind) => {
            if (ind < 20) setdataApi((pre) => [...pre, e])
        })
    }, [])
    const dataSet = {
        labels: dataApi?.map(e => e.date),
        datasets: [
            {
                label: "hii",
                data: dataApi?.map(e => e.value),
                backgroundColor: dataApi?.map(e => `rgba(${e.value},${Math.random() * 100}, ${Math.random() * 200}  , 0.3)`),
                borderColor: dataApi?.map(e => `rgba(${e.value},${Math.random() * 100}, ${Math.random() * 200}  , 0.3)`),
            }
        ]
    }
    return (
        <div className="pieChart">
            <Pie data={dataSet} />
        </div>
    )
}
