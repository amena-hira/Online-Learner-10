import React,{useContext} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';
import './Register.css'

const Register = () => {
    const {mode, signIn, updateUserProfile} = useContext(ModeAuthContext);
    const navigate = useNavigate();

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleSignIn = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        console.log(name, photoURL, email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            navigate('/login');
        })
        .catch(error =>{
            console.log(error);
        })

    }
    return (
        <div className={`container d-flex text-${mode==='light'?'dark':'light'}`}>
            
            <div className={`mx-auto shadow-lg px-5 pt-5 pb-3 mb-3 bg-${mode==='dark'?'dark':'light'} rounded form-width`}>
                <h2 className='text-center mb-4'>Registration</h2>
                <Form onSubmit={handleSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Full Name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Full Name" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control type="text" name='photoURL' placeholder="Enter Photo URL" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required/>
                    </Form.Group>
                    
                    <div className='text-center'>
                        <Button className='w-100'  variant="primary" type="submit">
                        Submit
                        </Button>
                    </div>
                </Form>
                <div className='text-center mt-4'>
                    <p className='mb-0'> Have an account?</p>
                    <Link className=' btn text-primary pt-0' to='/login'>Login</Link>
                </div>
                
            </div>
            
        </div>
    );
};

export default Register;