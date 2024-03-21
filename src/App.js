import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import React from 'react';
import { Home } from './pages/home';
import { About } from './pages/about';
import { Miscellaneous } from './pages/miscellaneous';
import { Review } from './pages/reviews';
import { Services } from './pages/services';
import { Login } from './pages/login';
import { SignUp } from './pages/signup';
import Footer from './components/footer';
import { AuthProvider } from './hooks/Authcontext';


function App() {
  return (
    <div className="App">
        <Router>
          <AuthProvider>
            <NavBar/>
                <Routes>
                    <Route path = '/' element={<Home/>}/>
                    <Route path = '/about' element={<About/>}/>
                    <Route path = '/miscellaneous' element={<Miscellaneous/>}/>
                    <Route path = '/reviews' element={<Review/>}/>
                    <Route path = '/services' element={<Services/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                </Routes>
            <Footer/>
          </AuthProvider>
        </Router>
    </div>
  );
}

export default App;
