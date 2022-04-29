import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"

import Home from './pages/Home';
import Register from './pages/Register';
import Header from './components/Header';

function App() {
  
  return (
    <BrowserRouter>    
    <div  style={{textAlign: "center"}} className="App">
      <Header/>
      <ToastContainer position='top-center'/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>  
    </div>
    </BrowserRouter>    
  );
}

export default App;
