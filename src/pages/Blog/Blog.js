import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import './Blog.css';

const Blog = () => {

    return (
        <div className='container'>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header className='header'>what is cors?</Accordion.Header>
                    <Accordion.Body className={` bg-dark text-light`}>
                    CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body className={` bg-dark text-light`}>
                    Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Firebase allow syncing the real-time data across all the devices- Android, iOS, and the web without refreshing the screen. Firebase is used for Authentication and enable to get many authentication system which provided different system like Google, GitHub, Facebook etc etc. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    
                    <Accordion.Header>How does the private route work?</Accordion.Header>
                    <Accordion.Body className={` bg-dark text-light`}>
                    The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                    <Accordion.Body className={` bg-dark text-light`}>
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.Node.js basically works on two concept - Asynchronous & Non-blocking I/O
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blog;