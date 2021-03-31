import React, { useState } from "react";
import { store } from "../../../../../redux/store";
import { Button, CardDeck, Modal } from "react-bootstrap";
import ProjectCard from "../cards/ProjectCard";
import { Project } from "../models/model";

interface ProjectsModalProps {
    projects: Project[];
}

export const ProjectsModal: React.FC<ProjectsModalProps> = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const themeClassname =
        store.getState().theme === "dark"
            ? "academic-dark-modal"
            : "academic-light-modal";

    return (
        <>
            <Button variant="outline-info" onClick={handleShow}>
                Project{props.projects.length > 1 ? "s" : ""}
            </Button>

            <Modal className={themeClassname} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Project{props.projects.length > 1 ? "s" : ""}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardDeck>
                        {props.projects.map((project) => {
                            return <ProjectCard project={project} />;
                        })}
                    </CardDeck>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
