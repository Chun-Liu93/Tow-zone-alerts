import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Col, Row  } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/img/logo.png";

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
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
}, []);

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
};

return (
    <>
    <Navbar bg="primary" expand="lg" data-bs-theme="dark">
        <Container className="container-bar">
            <Navbar.Brand href="/">
            <img className="navbar-logo" src={logo} alt="logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">How it works</Nav.Link>
                    <Nav.Link href="#pricing">About</Nav.Link>
                    <Nav.Link href="#donate">Donate</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <br />
    </>
);
};

