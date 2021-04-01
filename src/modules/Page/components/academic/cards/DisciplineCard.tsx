import React from "react";
import { store } from "../../../../../redux/store";
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
            description,
            ects,
            projects
        } = this.props.discipline;
        let { theme } = store.getState();
        return (
            <>
                <Card 
                    bg={theme} 
                    text={ theme === 'light' ? 'dark' : 'white'} 
                    style={{ flex: 1, width: "80%" }}>
                    <Card.Header>
                        <h5>
                            {name}
                        </h5>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        {projects && projects.length > 0 &&
                         <ProjectsModal projects={projects} />}
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        {ects} ects
                    </Card.Footer>
                </Card>
                <br></br>
            </>
        );
    }
}
