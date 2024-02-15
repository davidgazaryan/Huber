import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import React from 'react';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Miscellaneous } from './pages/miscellaneous';
import { Reviews } from './pages/reviews';
import { Services } from './pages/services';
import { Login } from './pages/login';
import { SignUp } from './pages/signup';
import Footer from './components/footer';



function App() {
  return (
    <div className="App">
        <Router>
            <NavBar/>
                <Routes>
                    <Route path = '/' element={<Home/>}/>
                    <Route path = '/about' element={<About/>}/>
                    <Route path = '/miscellaneous' element={<Miscellaneous/>}/>
                    <Route path = '/reviews' element={<Reviews/>}/>
                    <Route path = '/services' element={<Services/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
