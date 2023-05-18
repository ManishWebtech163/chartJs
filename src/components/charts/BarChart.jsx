import React from 'react'
import { useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { numbersData } from '../../apis/numbersData'
import { useEffect } from 'react'
export default function BarChart() {
    const [apiData, setApidata] = useState([])
    const data = {
        labels: apiData.map((e) => e.date),
        datasets: [{
            label: 'a',
            data: apiData.map((e) => e.value),
            backgroundColor: "pink"
        }, {
            label: 'b',
            data: apiData.map((e) => e.value),
            backgroundColor: "red"
        }],
    }

    // --options--
    const options = {
        type: "Bar",
        options: {
            responsive: false,
            title: {
                display: false
            }
        }
    }

    // --set data fun--
    const setDataFun = () => {
        numbersData?.map((e, index) => {
            if (index < 10) setApidata((pre) => [...pre, e])
        })
    }
    useEffect(() => {
        setDataFun()
    }, [])
    return (
        <div className="barChart">
            <Bar options={options} data={data} />
        </div>
    )
}
