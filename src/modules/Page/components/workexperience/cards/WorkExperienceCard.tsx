import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Work } from '../models/models';

interface WorkExperienceCardProps{
    work: Work
}

interface WorkExperienceCardState {}

export default class WorkExperienceCard extends React.Component<WorkExperienceCardProps, WorkExperienceCardState> {

    render() {
        let { 
            company_name, 
            company_logo, 
            title, 
            start_date, 
            end_date, 
            location, 
            notable_tasks, 
            technologies } = this.props.work;
        return (
            <>
                <Card style={{flex: 1, width: '80%'}}>
                    <Card.Body>
                        <Card.Title>{title} @ {company_name}</Card.Title>
                        <Card.Text>{location}</Card.Text>
                        <Card.Text>{start_date} - {end_date || 'Ongoing'}</Card.Text>
                        <Card.Text>{technologies.join(', ')}</Card.Text>
                        {notable_tasks.map((task) => {
                            return <Card.Text>-{task}</Card.Text>
                        })}
                        <Card.Img variant="top" src={company_logo} />
                    </Card.Body>
                </Card>
            </>
        );
    }
}