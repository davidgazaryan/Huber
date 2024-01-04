import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar/>
                <Routes>
                    <Route path= '/' element={<Home/>}/>
                </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
