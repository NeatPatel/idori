import { Container, Button, Nav, Navbar as Nbar, NavDropdown, Form } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import search_icon from '../assets/search_icon.png';
import cart_empty from '../assets/cart_empty.png';
import logo from '../assets/logo.avif';
import styles from './navbar.module.scss';

function Navbar() {
    const learnElement = <span className={styles.navText}>Learn</span>;
    const impactElement = <span className={styles.navText}>Out Impact</span>;
    const aboutElement = <span className={styles.navText}>About Us</span>;

    return (<>
        <Nbar variant="light" className="navbar-light bg-light" expand="lg">
           <Container fluid className="ms-5 my-3">
                <Nbar.Brand className="mx-4 px-0"> 
                    <Link to="/"><img src={logo} width="120vh" height="52vh" className="d-inline-block align-top" alt="Logo" /></Link>
                </Nbar.Brand>
                <Nbar.Toggle aria-controls="navbarScroll" />
                <Nbar.Collapse>
                    <Nav variant="primary" className="mx-3" navbarScroll>
                        <Nav.Link>
                            <Link to="/" className={styles.navText}>Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/shop" className={styles.navText}>Shop</Link>
                        </Nav.Link>
                        <NavDropdown title={learnElement}>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/eco-friendly-brands" className={styles.navTextNoHover}>Eco-Friendly Brands</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/sustainability-activities" className={styles.navTextNoHover}>Sustainability Activities</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/blog" className={styles.navTextNoHover}>Our Blog</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={impactElement}>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/partners" className={styles.navTextNoHover}>Partners</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/philanthropy" className={styles.navTextNoHover}>Philanthropy</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/production" className={styles.navTextNoHover}>Production</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={aboutElement}>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/meet-the-team" className={styles.navTextNoHover}>Meet The Team</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/contact-us" className={styles.navTextNoHover}>Contact Us</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item style={{backgroundColor: "white"}}>
                                <Link to="/get-involved" className={styles.navTextNoHover}>Get Involved</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <Link to="/press" className={styles.navText}>Press</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/play" className={styles.navText}>Play!</Link>
                        </Nav.Link>
                    </Nav>
                </Nbar.Collapse>
                <Nbar.Collapse className="justify-content-end">
                    <Nav className="ms-4" navbarScroll>
                        <Form className="d-flex">
                            <Form.Control type="search" placeholder="Search" className="me-1" />
                            <Button variant="outline-secondary" className="me-3 px-2"><img src={search_icon} width="23vh" height="23vh" /></Button>
                        </Form>
                        <Nav.Link className="me-3 px-auto">
                            <Link to="/shop"><img src={cart_empty} width="20vh" height="20vh" /></Link>
                        </Nav.Link>
                    </Nav>
                </Nbar.Collapse>
            </Container> 
        </Nbar>

        <Outlet />
    </>);
}

export default Navbar;