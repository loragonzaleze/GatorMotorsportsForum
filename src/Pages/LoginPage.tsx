import axios from "axios";
import React from "react";
import api from "../utils/api"

interface LoginProps {}
interface LoginState {
    username : string,
    password : string,
    loggedIn: boolean
}
    

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props : any){
        super(props)
        this.state = {
            username : '',
            password : '',
            loggedIn : false
        }

        this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        
    }
    
    componentDidMount(){

         api.post("https://dev-gatormotorsportsapi.herokuapp.com/login", 
        {
            username: "Edwin",
            password: "password"
        }        ).then(res => {
            console.log('RESPONSE FROM PSOT REQUEST')    
            console.log(res)
            api.get("https://dev-gatormotorsportsapi.herokuapp.com/secured").then(res => {
        
            console.log('RESPONSE FROM GET REQUEST')    
            console.log(res)
            })
            .catch(error => {
                console.log("ERROR HAS Occured")
                console.log(error)
            })  
        })    
    }

    handleUsernameChange(event){
        this.setState({username : event.target.value})
    }

    handlePasswordChange(event){
        this.setState({password : event.target.value})
    }

    handleUsernameSubmit(event){
        console.log("Username was submitted")
        console.log(this.state.username)
        console.log("Password submitted")
        console.log(this.state.password)
        event.preventDefault()
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleUsernameSubmit}>

                    <div>
                        <label>
                            Username:
                            <input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
                        </label>
                    </div>
                    <div>
                        <label>
                            Password: 
                            <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        </label>
                    </div>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default Login;