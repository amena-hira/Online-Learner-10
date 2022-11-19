import React,{useContext} from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';

const Login = () => {
    const {mode} = useContext(ModeAuthContext)
    return (
        <div className={`container d-flex text-${mode==='light'?'dark':'light'}`}>
            
            <div className={`m-auto shadow-lg p-5 mb-5 bg-${mode==='dark'?'dark':'light'} rounded`}>
                <h2 className='text-center mb-4'>Login</h2>
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className='text-center mt-5 pt-3'>
                    <p className='mb-0'> Don't have an account?</p>
                    <Link className=' btn text-primary'>Sign Up</Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Login;