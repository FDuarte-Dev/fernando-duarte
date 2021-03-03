import React from 'react';
import { Card } from 'react-bootstrap';

export default class ApplicationCard extends React.Component {

    render() {
        return (
            <>
                <Card style={{flex: 1, width: '80%'}}>
                    <Card.Body>
                        <Card.Title>Application</Card.Title>
                    </Card.Body>
                </Card>
            </>
        );
    }
}