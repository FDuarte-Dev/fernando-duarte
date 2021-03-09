import React from 'react';
import { store } from '../../../redux/store';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export default class HeaderNavBar extends React.Component {
    changePage = (page: string) => (e: any) => {
        e.preventDefault();
        store.dispatch({type: 'CHANGE_PAGE', page: page});
    };

    render() {
        return (
            <Navbar bg="light" expand="lg" >
            <Navbar.Brand onClick={this.changePage('home')}>Fernando Duarte</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link onClick={this.changePage('home')} >Home</Nav.Link>
                <Nav.Link onClick={this.changePage('academic')}>Academic</Nav.Link>
                <Nav.Link onClick={this.changePage('work-experience')}>Work Experience</Nav.Link>
                <Nav.Link onClick={this.changePage('projects')}>Projects</Nav.Link>
                <Nav.Link onClick={this.changePage('applications')}>Applications</Nav.Link>
                <Nav.Link onClick={this.changePage('contacts')}>Contacts</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        );
    }
}