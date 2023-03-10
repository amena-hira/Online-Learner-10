import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { ModeAuthContext } from '../../../context/ModeAuthContext/ModeAuthContextProvider';
import logo from '../../../Images/logo.jpg';



const Header = () => {
    const {mode, toggleMode, user, logOut} = useContext(ModeAuthContext);

    
    const handleLogOut = () =>{
        logOut()
        .then(() => {})
        .catch(() => {})
    }
    
    return (
        <Navbar collapseOnSelect expand="lg" bg={mode} variant={mode} className='mb-3'>
            <Container>
                <Navbar.Brand href="#home">
                    <Image className='me-2' src={logo} style={{height:'50px',width:'50px'}} roundedCircle></Image>
                    Online Learner</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto">
                    <Link className='nav-link' to="/">Home</Link>
                    <Link className='nav-link' to="/">Courses</Link>
                    <Nav.Link href="#pricing">FAQ</Nav.Link>
                    <Link className='nav-link' to="/blog">Blog</Link>
                    
                    
                </Nav>
                <Nav>
                    {
                        user?.photoURL?
                        <>
                            <div className='my-auto'>
                                <Image className='border rounded-circle' src={user.photoURL} style={{height:'50px'}} data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.displayName}></Image>
                            </div>
                            <Link onClick={handleLogOut} className='nav-link me-1'>Logout</Link>
                        </>
                        :
                        <Link to='/login' className='nav-link me-1'>Login</Link>
                    }

                    
                    
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