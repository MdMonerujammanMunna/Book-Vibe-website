import React from 'react';

import { Outlet } from 'react-router';
import NavBar from '../Component/NavBar/NavBar';
const LayOut = () => {
    return (
        <>
            <NavBar></NavBar>
            <Outlet />
        </>
    );
};

export default LayOut;