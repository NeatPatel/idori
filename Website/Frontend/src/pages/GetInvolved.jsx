import styles from './getinvolved.module.scss';
import SingleBlock from '../components/SingleBlock';
import { Form, Row, Col, ListGroup } from 'react-bootstrap';
import { useState } from 'react';
const involvedTitle = "Engage, Inspire, and Make a Difference | Get Involved with Idori";

function GetInvolved() {
    document.title = involvedTitle;

    const [ contactValidated, setContactValidated ] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setContactValidated(true);
    };
    return (<>
        <SingleBlock mt = "5" content = {<>
            <div className='text-primary' >
                <h1> We're Hiring</h1>
                <p style={{"paddingLeft" : "200px", "paddingRight" : "200px"}}>If you're interested in joining our team, start by applying here:<br/>
                    Idori is a young venture and we are looking for anybody who is passionate about our mission to save the
                    environment who believes that their skills could help this company grow and make real impact! <br/>
                    We are specifically interested in (but not limited to) hiring the following roles: <br/>
                </p>
                <ListGroup className="w-75 m-auto">
                    <ListGroup.Item className="text-primary">E-commerce Intern (Helping with sales, operations and marketing)</ListGroup.Item>
                    <ListGroup.Item className="text-primary">Social Media Intern (Actively managing several social media platforms)</ListGroup.Item>
                    <ListGroup.Item className="text-primary">Design Intern (Developing branding strategies and helping with graphic design)</ListGroup.Item>
                    <ListGroup.Item className="text-primary">Software Engineer Intern (Programming and developing game design)</ListGroup.Item>
                </ListGroup>
            </div>
            
            </>}></SingleBlock>
        
            <SingleBlock mt="10" mb="10" content={<>
                <h2 className='text-primary' style={{"textAlign" : "left", "paddingLeft" : "150px", "paddingBottom" : "20px"}}> Apply Now!</h2>
            <Form noValidate validated={contactValidated} className="w-75 mx-auto" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control className="text-primary" type="text" placeholder="Name" />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control className="text-primary" type="email" placeholder="Email*" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form.Group>
                            <Form.Control className="text-primary" type="text" placeholder="Phone Number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form.Group>
                            <textarea className="text-primary form form-control" type="textarea" placeholder="Comments" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form.Group>
                            <Form.Control className="text-light text-left w-25 bg-primary me-auto ms-1" type="submit" placeholder="Submit" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </>} />
    </>);
}

export default GetInvolved;