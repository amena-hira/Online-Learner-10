import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css'
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';
import Button from 'react-bootstrap/Button';

const CourseDetails = () => {
    const {mode} = useContext(ModeAuthContext);
    const course = useLoaderData();
    console.log(course);
    const { id, name, img, details } = course;
    return (
        <div className='container d-flex'>
            <div className='mx-auto card-width'>
                <Card className={`bg-${mode} text-${mode==='light'?'dark':'light'}`}>
                    <Card.Header>Programme Title: {name}</Card.Header>
                    <Card.Img variant="top" src={img} style={{height: '250px'}}/>
                    <Card.Body>
                        <Card.Text>
                            {details}
                        </Card.Text>
                        <Link to={`/checkout/${id}`} className='btn btn-primary' >Get Premium Access</Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default CourseDetails;