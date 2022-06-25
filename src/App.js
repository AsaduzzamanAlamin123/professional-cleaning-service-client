
import './App.css';
import Navbar from './Navbar';

import { Routes, Route } from "react-router-dom";
import { publicRoute } from './routes/publicRoute';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Services from './pages/Services';
import RequireAuth from './authentication/RequireAuth';
import About from './pages/About';






function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className="">
    <Navbar>
    <Routes>
    {/* <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/services' element={<Services></Services>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/login' element={<Login></Login>}></Route> */}

    {
      publicRoute.map((route , index) => <Route path={route.path} key={index} element={<route.Component></route.Component>}></Route>)
    }
    {/* one different way to do privet route */}
    {/* <Route path='/services' element={<RequireAuth>
      <Services></Services>
    </RequireAuth>}></Route>
    <Route path='/about' element={<RequireAuth><About></About></RequireAuth>}></Route> */}
    {/* the best way to emplemetn privet route and thats name is nested route */}
    <Route element={<RequireAuth></RequireAuth>}>
      <Route path ='/services' element={<Services></Services>}></Route>
      <Route path ='/about' element={<About></About>}></Route>

    </Route>
    </Routes>
    </Navbar>
    
    
    </div>
  );
}

export default App;
