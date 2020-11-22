import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {Button,Nav }from 'react-bootstrap';


const nav = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Button variant="outline-info">Search</Button>
                </Navbar>
        </div>
    );
};

export default nav;