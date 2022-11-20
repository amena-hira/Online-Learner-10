import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { ModeAuthContext } from '../../context/ModeAuthContext/ModeAuthContextProvider';

const CourseCard = ({course}) => {
    const {mode} =useContext(ModeAuthContext);
    const {id, name, img} = course;
    return (
        
        
            <Col>
                <Link to={`/course/${id}`} className={`card bg-${mode} text-${mode==='light'?'dark':'light'}`} style={{textDecoration: 'none'}}>
                    <Card.Img variant="top" src={img} style={{height:'250px'}}/>
                    <Card.Body>
                    <Card.Title className='text-center'>{name}</Card.Title>
                    
                    </Card.Body>
                </Link>
            </Col>
       
            
    );
};

export default CourseCard;