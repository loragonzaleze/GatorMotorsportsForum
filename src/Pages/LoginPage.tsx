import axios from "axios";
import React from "react";
import { Nav } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import api from "../utils/api"
import './../CSS/LoginPageCSS.css'
import {LoginContext} from './../context/loginContext' 

interface LoginProps {
    loggedIn : boolean
}
interface LoginState {
    username : string,
    password : string,
    loggedIn: boolean,
    loginError: boolean,
    incorrectPassword: boolean,
    nonexistentUsername: boolean,
    loggedInUser : string
}

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props : any){
        super(props)
        this.state = {
            username : '',
            password : '',
            loggedIn : false,
            loginError: false,
            incorrectPassword: false,
            nonexistentUsername: false,
            loggedInUser : 'Not logged in 2',
        }

        this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        
    }



    componentDidMount(){
         
    }

    handleUsernameChange(event){
        this.setState({username : event.target.value})
        if(this.state.loginError){
            this.setState({
                loginError : false,
                incorrectPassword : false,
                nonexistentUsername : false,
                username : "",
                password : ""
            })
        }
    }

    handlePasswordChange(event){
        this.setState({password : event.target.value})
        if(this.state.loginError){
            this.setState({
                loginError : false,
                incorrectPassword : false,
                nonexistentUsername : false,
                password: ""
            })
        }
    }
    
    handleUsernameSubmit(setUsername){
        api.post("https://dev-gatormotorsportsapi.herokuapp.com/login", 
        {
            username: this.state.username,
            password: this.state.password
        }).then(res => {
            if(res.data.success)
            {
                this.setState({loggedIn : true})
                console.log('Correct password')
                console.log(res.data.message)
                console.log('Redirecting to main page...')
                setUsername(this.state.username)
            }
            else{
                this.setState({loginError : true})
                if(res.data.message === "Username does not exist"){
                    this.setState({nonexistentUsername : true})
                }
                else if(res.data.message === "Incorrect password, please try again"){
                    this.setState({incorrectPassword : true})
                }
                console.log("Error logging in")
                console.log(res.data.message)
            }  
        })
    }



    incorrectPasswordText = () => {
        return "Incorrect password"
    }

    preLogin = () => {
        var usernameInput = "inputForm" + (this.state.nonexistentUsername ? " error" : "")
        var passwordInput = "inputForm" + (this.state.incorrectPassword ? " error" : "")
        return (
        
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleUsernameSubmit}>
                    <div>
                        <label>
                            <input 
                                type="text"
                                value={this.state.username}
                                onChange={this.handleUsernameChange} 
                                className={usernameInput}
                                placeholder="Username"
                            />
                            
                        </label>
                    </div>
                    <div>
                        <label>
                            <input 
                                type="password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange} 
                                className={passwordInput}
                                placeholder="Password"
                            />
                            </label>
                    </div>
                    <div>
                        {this.state.loginError ? this.state.incorrectPassword ? "Incorrect Password" : "Username does not exist": null}
                    </div>
                </form>
                <LoginContext.Consumer>
                    {({username, setUsername}) => (
                        <button onClick={() => {this.handleUsernameSubmit(setUsername)}}>
                            Login
                        </button>
                    )
                    }
                </LoginContext.Consumer>
            </div>  
       
        )
        
    }

    postLogin = () => {
        return (
        
            <Navigate to="/main"/>
        )
        
    }

    render() {    
        return (
           this.props.loggedIn ? this.postLogin() : this.preLogin()
        )
    }
}

export default Login;