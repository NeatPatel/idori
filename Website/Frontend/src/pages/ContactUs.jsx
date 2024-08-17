import styles from './contactus.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import { Form, Row, Col } from 'react-bootstrap';
import { useState } from 'react';

const contactTitle = "Connect with Us and Share Your Sustainability Journey | Contact Idori";

function ContactUs() {
    const [ contactValidated, setContactValidated ] = useState(false);

    document.title = contactTitle;

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
    
        setContactValidated(true);
    };

    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <h1 className="text-primary">Contact Us</h1>
            <p className="text-primary">Interested in learning more about Idori? Contact us and let us know how we can help you spread <br />sustainability education to the next generation. We actively encourage schools, nonprofits, and other <br />companies interested in collaborating to reach out so we can all make a difference together!</p>
        </>} />
        <SingleBlock mt="10" mb="10" content={<>
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

export default ContactUs;