import { useState, useEffect } from "react";
import { Navbar, Nav, Col } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import {
BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

const [activeLink, setActiveLink] = useState('home');
const [scrolled, setScrolled] = useState(false);

useEffect(() => {
    const onScroll = () => {
    if (window.scrollY > 50) {
        setScrolled(true);
    } else {
        setScrolled(false);
    }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
}, [])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

return (
    <>
    <Navbar bg="dark" data-bs-theme="dark">
            <Col xs={12} md={6} >
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
                <Nav.Link href="#pricing">Donate</Nav.Link>
            </Nav>
            </Col>
    </Navbar>
    <br />
    </>
);
}
