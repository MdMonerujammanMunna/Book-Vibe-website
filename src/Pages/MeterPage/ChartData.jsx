import React from 'react';
import { useLoaderData } from 'react-router';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
const ChartData = () => {
    const AllData = useLoaderData()
    {
        AllData.map(item => item)
    }
    const data = [
        {
            name: 'Page A',
            uv: 5, //purple line
        },
        {
            name: 'Page B',
            uv: 868,
        },
        {
            name: 'Page C',
            uv: 1397,

        },
        {
            name: 'Page D',
            uv: 1480,

        },
        {
            name: 'Page E',
            uv: 1520,

        },
        {
            name: 'Page F',
            uv: 1400,

        },
    ];
    return (
        <>
            <div className="px-20 py-30 bg-[#13131310] rounded-3xl text-center flex justify-center">
                <ComposedChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '70vh', aspectRatio: 1.618 }}
                    responsive
                    data={data}
                    margin={{
                        top: 20,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis width="auto" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="uv" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="uv" stroke="#ff7300" />

                </ComposedChart>
            </div>
        </>
    );
};

export default ChartData;