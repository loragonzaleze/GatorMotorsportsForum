import React, {Component, useState} from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import { Routes, Route, Link} from "react-router-dom";
import Login from './Pages/LoginPage';
import Main from './Pages/MainPage';
import Home from './Pages/HomePage';
import NavigationBar from './Components/NavigationBar';
import NotFound from './Pages/NotFoundPage';
import { LoginContext } from './context/loginContext';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import api from './utils/api';

class App extends Component {


  componentDidMount() {
    console.log('RUNNIGN APP FIRST???????')
    api.get("https://dev-gatormotorsportsapi.herokuapp.com/secured")
         .then(res => {
             if(res.data.success){
                 if(res.data.message === 'logged in'){
                     this.setState({loggedIn : true})
                     this.setUsername(res.data.username)
                 }
             }
        }) 
  }


  setUsername = username => {
    this.setState({
      loginContext : {
        username : username
      }
    })
  }

  state = {
    loginContext: {
      username : "Blank",
      setUsername : this.setUsername
    },
    loggedIn : false
  }

  render() {
    console.log('RUNNIGN APP FIRST SECOND CHECK???????')

    return (
      <LoginContext.Provider value={this.state.loginContext}>
        <BrowserRouter>
          <div className="App">
            <NavigationBar loggedIn={this.state.loggedIn}/>
              <Routes>
                  <Route path="/" element={<Home />}/>
                  <Route path="/login/" element={<Login loggedIn={this.state.loggedIn}/>}/>
                  <Route path="/main/" element={<Main loggedIn={this.state.loggedIn}/>}/>
                  <Route path="/*" element={<NotFound />} />
                </Routes>
          </div>
        </BrowserRouter>
      </LoginContext.Provider>
    )

  }
    
  
}

export default App;
