import React from "react";
import { store } from "../../../../../redux/store";
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
        let { theme } = store.getState();
        return (
            <>
                <Card 
                    bg={theme} 
                    text={ theme === 'light' ? 'dark' : 'white'} 
                    style={{ flex: 1, width: "80%" }}>
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
