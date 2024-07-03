import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactApexChart from 'react-apexcharts';
import { user_stats } from '../../store/actions/statsAction';

const Stats = () => {
    const { user } = useSelector((state) => state.authUser);

    const dispatch = useDispatch();
    const payload = {}

    const token = user?.token;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    const { stats } = useSelector((state) => state?.stats);
    useEffect(() => {
        dispatch(user_stats(payload, headers));
    }, [dispatch, token]);

    const series = [
        {
            name: 'Processed Images',
            data: [stats?.processed_images], 
        },
        {
            name: 'Total Images',
            data: [stats?.Plan?.image_processing_limit], 
        },
    ];

    const options = {
        chart: {
            type: 'bar',
            height: 350,
            zoom: {
                enabled: false,
            },
            colors: ['#008ffb', '#00e396'],
        },
        dataLabels: {
            enabled: false,
        },
        title: {
            text: 'ARR',
            align: 'left',
        },
        xaxis: {
            type: 'category',
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            opposite: false,
        },
        legend: {
            horizontalAlign: 'left',
        },
        fill: {
            colors: ['#008ffb', '#00e396'],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
    };

    return (
        <div>
            <h2 className="text-center pt-3">
                Plan Type: <span className="font-semibold text-primary">{stats?.Plan?.plantype}</span>
            </h2>
            <div id="chart" className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
                <ReactApexChart options={options} series={series} type="bar" height={300} width="90%" />
            </div>
            <div id="html-dist"></div>
        </div>
    );
};

export default Stats;
