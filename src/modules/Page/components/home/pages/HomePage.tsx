import React from "react";
import { FACE_LOGO } from "../../../../../utils/constants";
import { Container } from "react-bootstrap";
import "./HomePage.scss";

export default class HomePage extends React.Component {
    render() {
        return (
            <Container className="page-container">
                <img className="my_face" src={FACE_LOGO} alt="user" />
                <h2>Fernando Duarte</h2>
                <h3>Senior Software Engineer</h3>
                I’m a Senior Software Engineer specializing in backend
                development, system modernization, and cloud-native solutions.
                With expertise in .NET, Java, PHP, and cloud platforms like AWS
                and Azure, I build efficient, scalable, and maintainable
                software.
                <p></p>
                Driven by clean code, performance optimization, and Agile
                practices, I craft solutions that align technology with business
                goals. Let’s build something great.
            </Container>
        );
    }
}
