import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';
import './Login.css';

const Login = () => {
    const {mode, login} = useContext(ModeAuthContext);
    const navigate = useNavigate();

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div className={`container d-flex text-${mode==='light'?'dark':'light'} `}>
            
            <div className={`m-auto shadow-lg p-5 mb-5 bg-${mode==='dark'?'dark':'light'} rounded form-width`}>
                <h2 className='text-center mb-4'>Login</h2>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <div className='text-center'>
                        <Button className='w-100' variant="primary" type="submit">
                        Submit
                        </Button>
                    </div>
                    
                </Form>
                <div className='text-center mt-5 '>
                    <p className='mb-0'> Don't have an account?</p>
                    <Link className=' btn text-primary pt-0' to='/register'>Register</Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Login;