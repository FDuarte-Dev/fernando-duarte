import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Application } from '../models/model';
import { PLAY_STORE_BUTTON } from '../../../../../utils/constants';

interface ApplicationCardProps{
    application: Application
}

interface ApplicationCardState {}

export default class ApplicationCard extends React.Component<ApplicationCardProps, ApplicationCardState> {

    render() {
        let { name, description, html_url, icon } = this.props.application;
        return (
            <>
                <Card style={{flex: 1, width: '80%'}}>
                <Card.Header>
                        <Card.Img variant="top" src={icon} style={{width: '20%'}}/>
                            {name}
                        </Card.Header>
                    <Card.Body>
                        <Card.Text>{description}</Card.Text>
                        <Button variant="link" href={html_url} >
                            <img src={PLAY_STORE_BUTTON} alt="Play" style={{width: '20%'}}></img>
                        </Button>
                    </Card.Body>
                </Card>
                <br></br>
            </>
        );
    }
}