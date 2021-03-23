import React from "react";
import { Card } from "react-bootstrap";
import { Project } from "../models/model";

interface ProjectCardProps {
    project: Project;
}

interface ProjectCardState {}

export default class ProjectCard extends React.Component<ProjectCardProps, ProjectCardState> {

    render() {
        let {
            name,
            description
        } = this.props.project;
        return (
            <>
                <Card style={{ flex: 1, width: "80%" }}>
                    <Card.Body>
                        <Card.Title>
                            {name}
                        </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
                <br></br>
            </>
        );
    }
}
