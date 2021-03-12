import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { 
    faEnvelope
  } from '@fortawesome/free-regular-svg-icons';

export default class FooterNavBar extends React.Component {
    render() {
        return (
            <Navbar color="dark" fixed="bottom">
                <Container>
                    <Nav className="mr-auto" >
                        <Nav >FDuarte-Dev @ {new Date().getFullYear()}</Nav>
                        <Nav >
                            <div>
                                <a href="mailto:fernando.guerra.duarte@gmail.com">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                    fernando.guerra.duarte@gmail.com
                                </a>
                                <a href="https://github.com/FDuarte-Dev">
                                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                                </a>
                                <a href="https://www.linkedin.com/in/fernando-guerra-duarte/">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                            </div>
                        </Nav>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}