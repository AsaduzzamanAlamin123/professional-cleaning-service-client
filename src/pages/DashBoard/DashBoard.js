import React from 'react';
import { Outlet } from 'react-router-dom';


import DashBoardSidebar from './DashBoardSidebar';

const DashBoard = () => {
    return (
        <div>
            <DashBoardSidebar>
               <Outlet></Outlet>
               {/* <Routes>
                    <Route path='/dashboard/add-service' element={<AddService></AddService>}></Route>
                    <Route path='/dashboard/add-admin' element={<AddAdmin></AddAdmin>}></Route>
                </Routes> */}
               
            </DashBoardSidebar>
        </div>
    );
};

export default DashBoard;