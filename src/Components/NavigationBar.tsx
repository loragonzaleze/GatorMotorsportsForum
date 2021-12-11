import React from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class NavigationBar extends React.Component {
    render(){
        return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Gator Motorsports</Navbar.Brand>
                <Nav className='me-auto'>
                    <Nav.Link href="/main">Main</Nav.Link>
                    <Nav.Link href="#Announcments">Announcements</Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav>
               
            </Container>
          </Navbar>
        )
    }
}

export default NavigationBar