import styles from './footer.module.scss';
import { Link } from 'react-router-dom';
import { Card, ListGroup, Col, Row, Form } from 'react-bootstrap';

function Footer() {
    return (<>
        <Card className="position-relative mt-auto bg-light border-0">
            <ListGroup>
                <Card.Header className="ps-4 py-4">
                    <Row>
                        <Col className="ms-3">
                            <h4 className="text-primary mb-3">Quick Links </h4>
                            <Link to="/team" className="text-decoration-none text-primary"><p>Instagram</p></Link>
                            <Link to="/about" className="text-decoration-none text-primary"><p>Facebook</p></Link>
                        </Col>
                        <Col>
                            <h4 className="text-primary mb-3">Info</h4>
                            <Link to="/team" className="text-decoration-none text-primary"><p>Terms & Conditions</p></Link>
                            <Link to="/about" className="text-decoration-none text-primary"><p>Privacy Policy</p></Link>
                        </Col>
                        <Col>
                            <h4 className="text-primary mb-3">Our Mission</h4>
                            <Link to="/privacy-policy" className="text-decoration-none text-primary"><p>To inspire curiosity, imagination, and empathy for our beautiful planet.</p></Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-4 ms-3">
                            <h4 className="text-primary mb-3">Subscribe to our Emails</h4>
                            <Form.Group className="mb-3" controlId="form.EmailFooter">
                                <Form.Label className="text-primary">Email address</Form.Label>
                                <Form.Control type="email" className="text-primary" placeholder="name@example.com" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Header>
                <ListGroup.Item className="text-center text-primary" variant="light">© 2024, Idori</ListGroup.Item>
            </ListGroup>
        </Card>
    </>);
}

export default Footer;