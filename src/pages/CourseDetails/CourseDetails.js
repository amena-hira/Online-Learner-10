import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './CourseDetails.css'
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';

const CourseDetails = () => {
    const {mode} = useContext(ModeAuthContext);
    const course = useLoaderData();
    console.log(course);
    const { name, img, details } = course;
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
                    </Card.Body>
                </Card>
            </div>
            {/* <div class="card mb-3 mx-auto" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={img} class="img-fluid rounded-start" alt="..."/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Course Name: {name}</h5>
                            <p class="card-text">{details}</p>
                            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default CourseDetails;