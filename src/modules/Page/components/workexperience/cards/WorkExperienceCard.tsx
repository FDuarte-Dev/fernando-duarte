import React from "react";
import { store } from "../../../../../redux/store";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Work } from "../models/models";
import ProjectsDeck from "./ProjectsDeck";

interface WorkExperienceCardProps {
    work: Work;
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
            languages,
            technologies,
            projects
        } = this.props.work;
        let { theme } = store.getState();
        return (
            <>
                <Card 
                    bg={theme} 
                    text={ theme === 'light' ? 'dark' : 'white'} 
                    border="info" 
                    style={{ flex: 1, width: "100%" }}>
                    <Card.Header>
                        <Container>
                            <Row>
                                <Col xs={3}>
                                    <Row xs={1}>
                                        <Card.Img
                                            variant="top"
                                            src={company_logo}
                                            style={{ paddingTop: "5%" }}
                                        />
                                    </Row>
                                </Col>
                                <Col>
                                    <h3>
                                        {title} @ {company_name}
                                    </h3>
                                    <h5>{location}</h5>
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
                    {projects && <ProjectsDeck projects={projects}/>}
                    { languages &&
                        <Card.Footer className="text-muted">
                            Languages: {languages.join(", ")}
                        </Card.Footer>
                    }
                    { technologies &&
                        <Card.Footer className="text-muted">
                            Tech stack: {technologies.join(", ")}
                        </Card.Footer>
                    }
                </Card>
                <br></br>
            </>
        );
    }
}
