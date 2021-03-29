import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

interface FooterNavBarProps {
    theme: string;
}

interface FooterNavBarState {
    theme: string;
}

export default class FooterNavBar extends React.Component<FooterNavBarProps, FooterNavBarState> {
    constructor (props: FooterNavBarProps) {
        super(props);
        this.state = {
            theme: props.theme
        };
    }

    render() {
        let { theme } = this.state;
        return (
            <Navbar bg={theme} fixed="bottom">
                <Container>
                        <Nav >FDuarte-Dev @ {new Date().getFullYear()}</Nav>
                        <Nav >
                            <div className="social-container">
                                <a href="mailto:fernando.guerra.duarte@gmail.com" className="email social">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                </a>
                                <a href="https://github.com/FDuarte-Dev" className="github social">
                                    <FontAwesomeIcon icon={faGithubSquare} size="2x" />
                                </a>
                                <a href="https://www.linkedin.com/in/fernando-guerra-duarte/" className="linkedin social">
                                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                                </a>
                            </div>
                        </Nav>
                </Container>
            </Navbar>
        );
    }
}