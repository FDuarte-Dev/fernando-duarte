import React from "react";
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
        return (
            <>
                <Card style={{ flex: 1, width: "80%" }}>
                    <Card.Body>
                        <Card.Title>
                            {level.toString()}  in {field}
                        </Card.Title>
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
