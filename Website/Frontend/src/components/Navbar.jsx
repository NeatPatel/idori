import { Container, Button, Nav, Navbar as Nbar, NavDropdown, Form } from 'react-bootstrap';
import search_icon from '../assets/search_icon.png';
import cart_empty from '../assets/cart_empty.png';
import logo from '../assets/logo.avif';
import styles from '../index.module.scss';

function Navbar() {
    const learnElement = <span className={styles.navText}>Learn</span>;
    const impactElement = <span className={styles.navText}>Out Impact</span>;
    const aboutElement = <span className={styles.navText}>About Us</span>;

    return (<>
        <Nbar className={styles.nav} expand="lg">
           <Container fluid className="ms-5 my-3">
                <Nbar.Brand className="mx-4 px-0"> 
                    <img src={logo} width="120vh" height="52vh" className="d-inline-block align-top" alt="Logo" />
                </Nbar.Brand>
                <Nbar.Toggle aria-controls="navbarScroll" />
                <Nbar.Collapse>
                    <Nav className="mx-3" navbarScroll>
                        <Nav.Link>
                            <span className={styles.navText}>Home</span>
                        </Nav.Link>
                        <Nav.Link>
                            <span className={styles.navText}>Shop</span>
                        </Nav.Link>
                        <NavDropdown title={learnElement}>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Eco-Friendly Brands</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Sustainability Activities</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Our Blog</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={impactElement}>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Partners</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Philanthropy</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Production</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={aboutElement}>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Meet The Team</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Contact Us</span>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <span className={styles.navTextNoHover}>Get</span>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <span className={styles.navText}>Press</span>
                        </Nav.Link>
                        <Nav.Link>
                            <span className={styles.navText}>Play!</span>
                        </Nav.Link>
                    </Nav>
                </Nbar.Collapse>
                <Nbar.Collapse className="justify-content-end">
                    <Nav className="mx-3" navbarScroll>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-2" />
                            <Button variant="outline-secondary" className="me-4 px-2"><img src={search_icon} width="23vh" height="23vh" /></Button>
                        </Form>
                        <Nav.Link className="me-3">
                            <img src={cart_empty} width="20vh" height="20vh" />
                        </Nav.Link>
                    </Nav>
                </Nbar.Collapse>
            </Container> 
        </Nbar>
    </>);
}

export default Navbar;