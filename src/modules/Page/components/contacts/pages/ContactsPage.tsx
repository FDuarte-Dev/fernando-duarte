import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default class ContactsPage extends React.Component {
    render() {
        return (
            <>
                <h3>Phone: </h3><a href="tel:+351916077957">+351 916077957</a>
                <h3>Email: </h3><a href="mailto:fernando.guerra.duarte@gmail.com">fernando.guerra.duarte@gmail.com</a>
                <br></br>
                <a href="https://github.com/FDuarte-Dev">
                    <FontAwesomeIcon icon={faGithubSquare} size="3x" />
                </a>
                <br></br>
                <a href="https://www.linkedin.com/in/fernando-guerra-duarte/">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                </a>
            </>
        );
    }
}
