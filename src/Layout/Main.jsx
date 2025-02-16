import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div className='bg-[#212121] text-white'>
            <Navbar/>

            <div className=''>
                <Outlet />
            </div>
            
        </div>
    );
};

export default Main;