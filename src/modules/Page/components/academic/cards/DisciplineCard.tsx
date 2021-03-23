import React from "react";
import { Card } from "react-bootstrap";
import { ProjectsModal } from "../modals/ProjectsModal";
import { Discipline } from "../models/model";

interface DisciplineCardProps {
    discipline: Discipline;
}

interface DisciplineCardState {}

export default class DisciplineCard extends React.Component<DisciplineCardProps, DisciplineCardState> {

    render() {
        let {
            name,
            ects,
            projects
        } = this.props.discipline;
        return (
            <>
                <Card style={{ flex: 1, width: "80%" }}>
                    <Card.Body>
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <Card.Text>
                            {ects} ects
                        </Card.Text>
                        {projects && projects.length > 0 &&
                         <ProjectsModal projects={projects} />}
                    </Card.Body>
                </Card>
                <br></br>
            </>
        );
    }
}
