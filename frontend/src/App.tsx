import React, {useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { Routes, Route, Link} from "react-router-dom";
import Login from './Pages/LoginPage';
import Main from './Pages/MainPage';
import Home from './Pages/HomePage';
import NavigationBar from './Components/NavigationBar';
import NotFound from './Pages/NotFoundPage';


function App() {
  return (
    <div className="App">
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login/" element={<Login/>}/>
          <Route path="/main/" element={<Main/>}/>
          <Route path="/*" element={<NotFound />} />
        </Routes>
    </div>
  );
}

export default App;
