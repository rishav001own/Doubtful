import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Axios from "axios";
import "./loginPage.css";

const loginPage = () => {
    const submit=(event)=>{
        console.log(event.target[0].value)
        event.preventDefault()
        const body={
            email:event.target[0].value,
            password:event.target[1].value
        }
        Axios.post("http://localhost:1100/login",body,(res)=>{
            console.log(res)
        })
    }
    return (
        <div className="form_login">
            <Form onSubmit={submit}><h1>Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="link">
                    <Form.Text>
                        Create New Account <a href="/signup">Click here!!!</a> 
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Loginng In
                </Button>
            </Form>
        </div>
    );
};

export default loginPage;