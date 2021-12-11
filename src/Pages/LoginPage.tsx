import axios from "axios";
import React from "react";
class Login extends React.Component {
    state = {

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
    render() {
        return (
            <div>
                <h1>THIS WILL BE THE LOGIN PAGE</h1>
            </div>
        )
    }
}

export default Login;