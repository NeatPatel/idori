import styles from './contactus.module.scss';
import SingleBlock from '../components/SingleBlock.jsx';
import { Form, Row, Col, Button } from 'react-bootstrap';
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

const contactTitle = "Connect with Us and Share Your Sustainability Journey | Contact Idori";

function ContactUs() {
    const [ contactValidated, setContactValidated ] = useState(false);
    const [ contactSent, setContactSent ] = useState(false);

    const captchaRef = useRef(null);
    const formValidaterRef = useRef(null);
    const pleaseVerifyTextRef = useRef(null);

    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const phoneRef = useRef(null);
    const messageRef = useRef(null);

    const successTextRef = useRef(null);
    const failureTextRef = useRef(null);

    const successIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/></svg>;
    const failureIcon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/></svg>;

    document.title = contactTitle;

    const handleSubmit = (event) => {
        const form = formValidaterRef.current;
        if (form.checkValidity() === false || !captchaRef.current.getValue()) {
            if(!captchaRef.current.getValue()) pleaseVerifyTextRef.current.style.display = "block";
            event.preventDefault();
            event.stopPropagation();
        } else {
            pleaseVerifyTextRef.current.style.display = "none";

            if(!contactSent) {
                const serviceId = "service_1o4n4jw";
                const templateId = "template_21f03hc";
                const publicKey = "oHF1m3syGGWuK6njz";

                const templateParams = {
                    from_topic: "Contact Request",
                    from_name: nameRef.current.value,
                    from_email: emailRef.current.value,
                    from_number: phoneRef.current.value,
                    message: messageRef.current.value,
                    to_name: "Noah"
                };

                emailjs.send(serviceId, templateId, templateParams, publicKey).then(
                    () => {
                        successTextRef.current.style.display = "block";
                    },
                    (error) => {
                        failureTextRef.current.style.display = "block";
                    },
                );

                setContactSent(true);
            }
        }

        setContactValidated(true);
    };

    const captchaChange = (value) => {
        if(captchaRef.current.getValue != "") pleaseVerifyTextRef.current.style.display = "none";
        return;
    };

    return (<>
        <SingleBlock mt="10" mb="0" content={<>
            <h1 className="text-primary">Contact Us</h1>
            <p className="text-primary">Interested in learning more about Idori? Contact us and let us know how we can help you spread <br />sustainability education to the next generation. We actively encourage schools, nonprofits, and other <br />companies interested in collaborating to reach out so we can all make a difference together!</p>
        </>} />
        <SingleBlock mt="10" mb="10" content={<>
            <Form noValidate ref={formValidaterRef} validated={contactValidated} className="w-75 mx-auto" onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Control ref={nameRef} className="text-primary" type="text" placeholder="Name*" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a name
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Control ref={emailRef} className="text-primary" type="email" placeholder="Email*" required />
                            <Form.Control.Feedback type="invalid">
                                Please provide a valid email
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form.Group>
                            <Form.Control ref={phoneRef} className="text-primary" type="text" placeholder="Phone Number" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form.Group>
                            <textarea ref={messageRef} className="text-primary form form-control" type="textarea" placeholder="Comments" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <ReCAPTCHA
                            ref={captchaRef}
                            sitekey="6LdbGikqAAAAAF26bAv7K-DDXPnlJI5bHPbC9zji"
                            onChange={captchaChange}
                        />
                        <p ref={pleaseVerifyTextRef} className="text-danger text-start" style={{display: (captchaRef.current ? (captchaRef.current.getValue() != "" ? "none" : "block") : "none")}}>Please verify your are not a bot</p>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col>
                        <Form.Group className="text-start">
                            <Button onClick={handleSubmit} className="text-light bg-primary">Submit</Button>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
            <p ref={successTextRef} className="text-success" style={{display: "none"}}>{successIcon} Thank you for contacting us! We will reach you shortly!</p>
            <p ref={failureTextRef} className="text-danger" style={{display: "none"}}>{failureIcon} An error occured, please try again later</p>
        </>} />
    </>);
}

export default ContactUs;