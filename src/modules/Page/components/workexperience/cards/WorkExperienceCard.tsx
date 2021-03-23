import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Work } from "../models/models";

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
            technologies,
        } = this.props.work;
        return (
            <>
                <Card border="info" style={{ flex: 1, width: "80%" }}>
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
                        <Card.Text>{technologies.join(", ")}</Card.Text>
                        {notable_tasks.map((task) => {
                            return <Card.Text>-{task}</Card.Text>;
                        })}
                    </Card.Body>
                </Card>
            </>
        );
    }
}
