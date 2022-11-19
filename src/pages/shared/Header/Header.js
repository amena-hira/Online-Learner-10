import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../Images/logo.jpg';



const Header = () => {
    const [mode, setMode] = useState('light');
    const toggleMode = () => {
        if (mode === "light") {
          setMode("dark");
          document.body.style.backgroundColor = "black"; 
        } else {
          setMode("light");
          document.body.style.backgroundColor = "white";
        }
      };
    return (
        <Navbar collapseOnSelect expand="lg" bg={mode} variant={mode}>
            <Container>
                <Navbar.Brand href="#home">
                    <Image className='me-2' src={logo} style={{height:'50px',width:'50px'}} roundedCircle></Image>
                    PL Learning</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Nav.Link href="#features">Courses</Nav.Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                    <Nav.Link href="#pricing">Blog</Nav.Link>
                    
                    
                </Nav>
                <Nav>
                    <Nav.Link className='me-1'>Login</Nav.Link>
                    
                    <div className={`my-auto form-check form-switch text-${mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={toggleMode}  type="checkbox" id="flexSwitchCheckDefault" />
                        
                    </div>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;