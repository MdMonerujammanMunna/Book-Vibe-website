import React from 'react';
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
const ChartData = () => {
    const data = [
        {
            name: 'The Great Gatsby',
            Pages: 192, //purple line
        },
        {
            name: 'To Kill a Mockingbird',
            Pages: 281, //purple line
        },
        {
            name: '1984',
            Pages: 328, //purple line
        },
        {
            name: 'The Catcher in the Rye',
            Pages: 224, //purple line
        },
        {
            name: 'Pride and Prejudice',
            Pages: 279, //purple line
        },
        {
            name: 'The Hobbit',
            Pages: 310, //purple line
        },
        {
            name: 'Harry Potter and the Sorcerer Stone',
            Pages: 309, //purple line
        },
        {
            name: 'The Alchemist',
            Pages: 177, //purple line
        },
        {
            name: 'The Girl on the Train',
            Pages: 316, //purple line
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
                    <Bar dataKey="Pages" barSize={20} fill="#413ea0" />
                </ComposedChart>
            </div>
        </>
    );
};

export default ChartData;