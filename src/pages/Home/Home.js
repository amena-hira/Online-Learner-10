import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import ListGroup from 'react-bootstrap/ListGroup';
import CourseCard from '../CourseCard/CourseCard';
import Card from 'react-bootstrap/Card';

const Home = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className='mb-5'>
            <Container>
                <Row>
                    <Col lg="4" className='mb-2'>
                        <ListGroup>
                            {
                                courses.map(course => <LeftSideNav key={course.id} course={course}></LeftSideNav>)
                            }
                        </ListGroup>
                        
                    </Col>
                    <Col lg="8">
                        <Row xs={1} md={2} className="g-4">
                            
                                {Array.from({ length: 1 }).map((_, idx) => (
                                    courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
                                ))}
                            
                            
                        </Row>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default Home;