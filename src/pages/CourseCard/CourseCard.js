import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const CourseCard = ({course}) => {
    const {id, name, img, details} = course;
    return (
        
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
            
    );
};

export default CourseCard;