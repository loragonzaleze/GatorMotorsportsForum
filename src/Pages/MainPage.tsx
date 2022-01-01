import React from "react"
import api from "../utils/api"



interface LandingProps {
    loggedIn : boolean

}
interface LandingState {

  
}
class Main extends React.Component<LandingProps, LandingState> {
    constructor(props : any){
        super(props)
        this.state = {
            
        }

        
    }
      
    componentDidMount(){
        console.log('LOADED')
    }
    render() {
        return (
            <div>
                <h1>THIS WILL BE THE MAIN FORUM PAGE</h1>
                <p>logged IN: {this.props.loggedIn ? "YES" : "NO"}</p>
            </div>
        )
    }

}

export default Main