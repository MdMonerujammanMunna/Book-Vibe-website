import React from 'react';
import ChartData from './ChartData';
import { useLoaderData } from 'react-router';
const Meter = ({ MeterPage }) => {
    const AllData = useLoaderData()
    return (
        <>
            <div className="container mx-auto my-9">
                <ChartData MeterPage={MeterPage} AllData={AllData}></ChartData>
            </div>
        </>
    );
};

export default Meter;