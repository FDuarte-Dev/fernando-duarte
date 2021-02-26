import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Nav from 'react-bootstrap/Nav';

export default class FooterNavBar extends React.Component {
    render() {
        return (
            <Navbar color="dark" dark fixed="bottom">
                <Container>
                    <Nav className="mr-auto" >
                        <Nav >FDuarte-Dev @ {new Date().getFullYear()}</Nav>
                        <Nav>Social Icons</Nav>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}