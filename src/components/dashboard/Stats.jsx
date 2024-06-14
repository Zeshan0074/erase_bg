import React, { useState, Suspense } from 'react';

const ReactApexChart = React.lazy(() => import('react-apexcharts'));

const Stats = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "Sample Series",
                data: [0, 0, 10, 20, 30, 50, 40, 20, 10, 10]
            },
            {
                name: "Series 2",
                data: [10, 15, 25, 30, 35, 40, 35, 30, 25, 20]
            }
        ],
        options: {
            chart: {
                type: 'area',
                height: 350,
                zoom: {
                    enabled: false
                },
                colors: ["#009f88", "#775dd0"],
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                curve: 'smooth',
                colors: ['#009f88', '#775dd0']
            },
            title: {
                text: 'ARR',
                align: 'left'
            },
            xaxis: {
                type: 'category',
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
            },
            yaxis: {
                opposite: false
            },
            legend: {
                horizontalAlign: 'left'
            },
            fill: {
                colors: ['#a5f0e2', '#e5d5ff']
            }
        }
    });

    return (
        <div>
            <div id="chart" className='w-[80%] mx-auto'>
                <Suspense fallback={<div>Loading...</div>}>
                    <ReactApexChart
                        options={state.options}
                        series={state.series}
                        type="area"
                        height={300}
                        width="90%"
                    />
                </Suspense>
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default Stats;
