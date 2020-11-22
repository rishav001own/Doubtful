import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Button,Nav }from 'react-bootstrap';


const nav = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Doubtfull</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/createpost">CreatePost</Nav.Link>
                    </Nav>
                    <Button variant="outline-info" href="/login">Login/Signup</Button>
                </Navbar>
        </div>
    );
};

export default nav;