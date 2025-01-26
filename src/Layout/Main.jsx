import React from 'react';
import { Outlet } from 'react-router-dom';


const Main = () => {
    return (
        <div className=''>

            <div className=''>
                <Outlet />
            </div>
            
        </div>
    );
};

export default Main;