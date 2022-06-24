
import './App.css';
import Navbar from './Navbar';

import { Routes, Route } from "react-router-dom";
import { publicRoute } from './routes/publicRoute';






function App() {
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
    </Routes>
    </Navbar>
    
    
    </div>
  );
}

export default App;
