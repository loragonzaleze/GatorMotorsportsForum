import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { LoginContext } from '../context/loginContext';
import {Menu} from 'semantic-ui-react'
import '../ComponentsCSS/NavigationBar.css'
import api from '../utils/api'


interface NavBarProps {
    loggedIn : boolean
}

interface NavBarState {
    loggedInUsername : string
}


class NavigationBar extends React.Component<NavBarProps, NavBarState> {
    static contextType = LoginContext
    constructor(props){
        super(props)
        this.state = {
            loggedInUsername : 'Blank'
        }
    }   

    logout = () => {
        api.get("https://dev-gatormotorsportsapi.herokuapp.com/logout")
        .then(res => {
            console.log("response: ")
            console.log(res)
        })
    }

    componentDidMount(){
        this.setState({loggedInUsername : this.context.username})
    }
    render(){
        console.log("Current username")
        console.log(this.context.username)
        return(
            <Menu 
                inverted
                attached='top'
                borderless
            >
                
                <Menu.Item
                    name='Main'
                    active={false}
                    as={Link}
                    to='/main'
                >
                    Main
                </Menu.Item>
                <Menu.Menu position='right'>
                    {(this.props.loggedIn || this.context.username !== 'Blank')? 
                    <Menu.Item
                        name='login'
                        onClick={this.logout}
                    >
                        Logout
                    </Menu.Item> : 
                    <Menu.Item
                        name='login'
                        active={false}
                        as={Link}
                        to='/login'
                    >
                        Login
                    </Menu.Item>}
                    

                    
                    {(this.props.loggedIn || this.context.username !== 'Blank') ?
                        <Menu.Item
                            name='username'
                        >
                            {this.context.username}
                        </Menu.Item> : null} 

                </Menu.Menu>

            </Menu>

            
        )
    }
}

export default NavigationBar

