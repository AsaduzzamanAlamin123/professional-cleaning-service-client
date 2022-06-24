
import './App.css';
import Navbar from './Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services'
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="">
    <Navbar>
    <Routes>
    <Route path='/' element={<Home></Home>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/services' element={<Services></Services>}></Route>
    <Route path='/contact' element={<Contact></Contact>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </Navbar>
    
    
    </div>
  );
}

export default App;
