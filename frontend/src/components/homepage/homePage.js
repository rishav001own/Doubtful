import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class homePage extends React.Component {
    componentDidMount=()=>{
        fetch("http://localhost:1100/allpost").then(res=>res.json()).then(data=>{
            console.log(data)
        })
    }
    render(){
        return (
            <div>
                <Card className="text-center">
                    <Card.Header>Name</Card.Header>
                    <Card.Body>
                        <Card.Title>title</Card.Title>
                        <Card.Text>
                        Discussion
                        </Card.Text>
                        <Button variant="primary">Comments</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">2 days ago</Card.Footer>
                </Card>
            </div>
        );
    }
};

export default homePage;