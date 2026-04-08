import React from 'react';

import AllBook from '../../Component/Home/AllBook';
import Banner from '../../Component/Home/Banner';
const HomePagex = () => {

    return (
        <>
            <div className="max-w-11/12 mx-auto">
                <Banner></Banner>
                <AllBook></AllBook>
            </div>
        </>
    );
};

export default HomePagex;