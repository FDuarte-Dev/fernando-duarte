import React from "react";
import { store } from "../../../../../redux/store";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Application } from "../models/model";
import { PLAY_STORE_BUTTON } from "../../../../../utils/constants";

interface ApplicationCardProps {
    application: Application;
}

interface ApplicationCardState {}

export default class ApplicationCard extends React.Component<
    ApplicationCardProps,
    ApplicationCardState
> {
    render() {
        let { name, description, html_url, icon } = this.props.application;
        let { theme } = store.getState();
        return (
            <>
                <Card
                    bg={theme}
                    text={theme === "light" ? "dark" : "white"}
                    style={{ flex: 1, width: "80%" }}
                >
                    <Card.Header>
                        <Container>
                            <Row>
                                <Col xs={3}>
                                    <Row xs={1}>
                                        <Card.Img
                                            variant="top"
                                            src={icon}
                                            style={{
                                                paddingTop: "5%",
                                                width: "20%",
                                            }}
                                        />
                                    </Row>
                                </Col>
                                <Col>
                                    <Row>
                                        <br></br>
                                    </Row>
                                    <Row xs={1}>
                                        <h2>{name}</h2>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            {description}
                            <br></br>
                            Currently Unavailable!
                        </Card.Text>
                        <Button variant="link" href={html_url} disabled>
                            <img
                                src={PLAY_STORE_BUTTON}
                                alt="Play"
                                style={{ width: "40%" }}
                            ></img>
                        </Button>
                    </Card.Body>
                </Card>
                <br></br>
            </>
        );
    }
}
