import React,{useContext, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';
import './Login.css';
import { FaGoogle } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const {mode, login, signInWithGoogle, signInWithGithub} = useContext(ModeAuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLogin = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        login(email, password)
        .then(result =>{
            const user = result.user;
            // console.log(user);
            form.reset();
            navigate('/');
        })
        .catch(error =>{
            setError(error.message);
            console.log(error);
        })
    }

    const handleLogInWithGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error =>{
            console.log(error);
        })
    }  
    const handleLogInWithGithub = () =>{
        signInWithGithub()
        .then(result =>{
            const user = result.user;
            console.log(user);
            navigate('/');
        })
        .catch(error =>{
            
            console.log(error);
        })
    }


    return (
        <div className={`container d-flex text-${mode==='light'?'dark':'light'} `}>
            
            <div className={`m-auto shadow-lg p-5 mb-5 bg-${mode==='dark'?'dark':'light'} rounded form-width`}>

                <h3 className='text-center mb-3'>Login</h3>
                <div className='mb-3'>
                    <div className='d-flex justify-content-center'>
                        <div onClick={handleLogInWithGoogle} className='border rounded px-3 pb-1 me-2'>
                            <FaGoogle className='text-success'></FaGoogle>
                        </div>
                        <div onClick={handleLogInWithGithub} className='border rounded px-3 pb-1 '>
                            <FaGithub></FaGithub>
                        </div>   
                    </div>
                </div>

                <p className='text-center mb-1'>or</p>
                <h6 className='text-center mb-2'>Login with Email</h6>

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
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                    
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