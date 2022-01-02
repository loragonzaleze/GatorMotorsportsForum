import React from "react"
import api from "../utils/api"
import {LoginContext} from "../context/loginContext"


interface LandingProps {
    loggedIn : boolean

}
interface LandingState {
    auth : boolean
}
class Main extends React.Component<LandingProps, LandingState> {
  
    static contextType = LoginContext
    constructor(props, context){
        console.log('MAIN CONTEXT')
        console.log(context)
        console.log('MAIN Props: ')
        console.log(props)
        super(props)
        this.state = {
            auth : this.props.loggedIn 
        }

        
    }
      
    componentDidMount(){
        this.setState({
            auth : (this.context.username !== 'Blank' || this.props.loggedIn)
        })
        
    }
    render() {
        return (
            <div>
                <h1>THIS WILL BE THE MAIN FORUM PAGE</h1>
                <p>logged IN: {(this.context.username !== 'Blank' || this.props.loggedIn ) ? "YES" : "NO"}</p>
            </div>
        )
    }

}

export default Main