import React from 'react';
import { FACE_LOGO } from '../../../../../utils/constants';
import { Container } from 'react-bootstrap';

export default class HomePage extends React.Component {

    render() {
        return (
            <Container className='page-container'>
                <img className="my_face" src={FACE_LOGO} alt='user'/>
                <h3>Welcome to my page!</h3>
                My name is Fernando Duarte and I'm a Software Developer from Portugal. 
                <br></br>
                In this webpage you can find a small overview of my progresses in the world of programming.
                <br></br>
                Feel free to explore further, and to hit me up using any of the contacts below.
            </Container>
        );
    }
}
