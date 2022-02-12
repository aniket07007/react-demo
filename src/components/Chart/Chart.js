import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css';

const chart = (props) => {
 
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value) 
    const totalMaximum = Math.max(...dataPointValues)
    console.log("props.dataPoints", props.dataPoints)

    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint => {
                return <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            })}
        </div>
    )
}

export default chart;