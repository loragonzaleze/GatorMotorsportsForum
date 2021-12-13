import React from "react"
import api from "../utils/api"
class Main extends React.Component {
    state = {

    }
      
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
    render() {
        return (
            <div>
                <h1>THIS WILL BE THE MAIN FORUM PAGE</h1>
            </div>
        )
    }

}

export default Main