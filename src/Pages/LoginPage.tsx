import axios from "axios";
import React from "react";


interface LoginProps {}
interface LoginState {
    username : string,
    password : string
}
    

class Login extends React.Component<LoginProps, LoginState> {
    constructor(props : any){
        super(props)
        this.state = {
            username : '',
            password : ''
        }

        this.handleUsernameSubmit = this.handleUsernameSubmit.bind(this)
        this.handleUsernameChange = this.handleUsernameChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        
    }
    componentDidMount(){
        axios.get("https://dev-gatormotorsportsapi.herokuapp.com/mongodb").then(res =>{
            console.log("Retrieved collections")
            console.log(res)
        })
        .catch(error => {
            console.log("error has occured")
            console.log(error)
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