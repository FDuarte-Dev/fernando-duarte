import React from "react";
import { store } from "../../../../../redux/store";
import { Card } from "react-bootstrap";
import { Degree } from "../models/model";
import { CurriculumModal } from "../modals/CurriculumModal";

interface DegreeCardProps {
    degree: Degree;
}

interface DegreeCardState {}

export default class DegreeCard extends React.Component<DegreeCardProps, DegreeCardState> {

    render() {
        let {
            field,
            level,
            institution,
            location,
            start_date,
            end_date,
            curriculum,
        } = this.props.degree;
        let { theme } = store.getState();
        return (
            <>
                <Card 
                    bg={theme} 
                    text={ theme === 'light' ? 'dark' : 'white'} 
                    style={{ flex: 1, width: "90%" }}>
                    <Card.Header>
                        <h5>
                            {level.toString()}  in {field}
                        </h5>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {institution} | {location}
                        </Card.Text>
                        <Card.Text>
                            {start_date} - {end_date}
                        </Card.Text>
                        <CurriculumModal curriculum={curriculum} />
                    </Card.Body>
                </Card>
                <br></br>
            </>
        );
    }
}
