import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Application } from '../../model/model';

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
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Img variant="top" src={icon} />
                        <Button variant="primary" href={html_url}>Visit</Button>
                    </Card.Body>
                </Card>
            </>
        );
    }
}