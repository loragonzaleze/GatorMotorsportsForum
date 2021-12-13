import React from "react"
import api from "../utils/api"



interface LandingProps {}
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
        api.get("http://127.0.0.1:5000/secured").then(res => {
            console.log('CALLED')
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