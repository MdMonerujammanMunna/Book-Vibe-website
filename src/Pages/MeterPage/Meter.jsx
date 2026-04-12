import React from 'react';
import ChartData from './ChartData';

const Meter = ({ MeterPage }) => {

    return (
        <>
            <div className="container mx-auto my-9">
                <ChartData MeterPage={MeterPage}></ChartData>
            </div>
        </>
    );
};

export default Meter;