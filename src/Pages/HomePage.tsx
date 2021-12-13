import React from "react";
import api from "../utils/api";

class Home extends React.Component {
    componentDidMount(){
        api.get("https://dev-gatormotorsportsapi.herokuapp.com/secured").then(res => {
            console.log('RESPONSE FROM GET REQUEST IN MAIN')    
            console.log(res)
            })
            .catch(error => {
                console.log("ERROR HAS Occured")
                console.log(error)
            })  

    }

    render(){
        return (
            <div>
                <h1>THIS IS THE MAIN PAGE</h1>
            </div>
        )
    }
}

export default Home