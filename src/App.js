import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import React from 'react';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Miscellaneous } from './pages/miscellaneous';


function App() {
  return (
    <div className="App">
        <Router>
            <NavBar/>
                <Routes>
                    <Route path = '/' element={<Home/>}/>
                    <Route path = '#about' element={<About/>}/>
                    <Route path = '#miscellaneous' element={<Miscellaneous/>}/>
                </Routes>
        </Router>
    </div>
  );
}

export default App;
