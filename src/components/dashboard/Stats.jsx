import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Stats = () => {
    const [state, setState] = useState({
        series: [
            {
                name: "Processed Images",
                data: [40, 25, 65, 30, 95, 40, 85, 30, 25, 70],

            },
            {
                name: "Total Images",
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            }
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                zoom: {
                    enabled: false
                },
                colors: ["#008ffb", "#00e396"],
            },
            dataLabels: {
                enabled: false
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
                colors: ['#008ffb', '#00e396']
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
        }
    });

    return (
        <div>
            <h2 className='text-center pt-3'>Plan Type: <span className='font-semibold  text-primary'>Premium</span> </h2>
            <div id="chart" className=' w-[95%] md:w-[90%] lg:w-[80%] mx-auto'>
                <ReactApexChart
                    options={state.options}
                    series={state.series}
                    type="bar"
                    height={300}
                    width="90%"
                />
            </div>
            <div id="html-dist"></div>
        </div>
    );
}

export default Stats;
