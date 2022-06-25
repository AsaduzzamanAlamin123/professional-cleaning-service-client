import './App.css';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import { publicRoute } from './routes/publicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import RequireAuth from './authentication/RequireAuth';
import { privetRoute } from './authentication/PrivetRoute';
import AdminRoute from './authentication/AdminRoute';
import DashBoard from './pages/DashBoard/DashBoard';
import AddAdmin from './pages/DashBoard/AddAdmin';
import AddService from './pages/DashBoard/AddService';


function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="">
    <Navbar>
    <Routes>
    {
      publicRoute.map((route , index) => <Route path={route.path} key={index} element={<route.Component></route.Component>}></Route>)
    }
     <Route element={<RequireAuth></RequireAuth>}>
      {
        privetRoute.map((proute , index) => <Route key={index} path ={proute.path} element={<proute.Component></proute.Component>}></Route> )
      }
      </Route>
      <Route element={<AdminRoute></AdminRoute>}>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}>
        
                    <Route path='add-service' element={<AddService></AddService>}></Route>
                    <Route path='add-admin' element={<AddAdmin></AddAdmin>}></Route>
                

        </Route>

      </Route>
    </Routes>
    </Navbar>
    
    
    </div>
  );
}

export default App;
