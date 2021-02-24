import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class HeaderNavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg" >
            <Navbar.Brand href="#home">Fernando Duarte</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#academic">Academic</Nav.Link>
                <Nav.Link href="#work-experience">Work Experience</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#applications">Applications</Nav.Link>
                <Nav.Link href="#contacts">Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}