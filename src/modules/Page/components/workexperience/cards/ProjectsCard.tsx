import React from "react";
import { store } from "../../../../../redux/store";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Project } from "../models/models";
import ProjectsDeck from "./ProjectsDeck";

interface ProjectsCardProps {
    project: Project;
}

interface ProjectsCardState {}

export default class ProjectsCard extends React.Component<ProjectsCardProps, ProjectsCardState> {
    render() {
        let {
            project_name: company_name,
            start_date,
            end_date,
            location,
            notable_tasks,
            languages,
            technologies,
        } = this.props.project;
        let { theme } = store.getState();
        return (
            <>
                <Card 
                    bg={theme} 
                    text={ theme === 'light' ? 'dark' : 'white'} 
                    border="info" 
                    style={{ flex: 1, width: "90%" }}>
                    <Card.Header>
                        <Container>
                            <Row>
                                <Col>
                                    <h4>
                                        {company_name}
                                    </h4>
                                    <h6>{location}</h6>
                                </Col>
                                <Col
                                    style={{ alignSelf: "center" }}>
                                    <h6>
                                        {start_date} - {end_date || "Ongoing"}
                                    </h6>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Card.Body>
                        {notable_tasks.map((task) => {
                            return <Card.Text>-{task}</Card.Text>;
                        })}
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        Languages: {languages.join(", ")}
                    </Card.Footer>
                    <Card.Footer className="text-muted">
                        Tech stack: {technologies.join(", ")}
                    </Card.Footer>
                </Card>
                <br></br>
            </>
        );
    }
}
