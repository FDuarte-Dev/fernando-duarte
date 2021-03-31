import React, { useState } from "react";
import { store } from "../../../../../redux/store";
import { Button, CardDeck, Modal } from "react-bootstrap";
import { Discipline } from "../models/model";
import DisciplineCard from "../cards/DisciplineCard";

interface CurriculumModalProps {
    curriculum: Discipline[];
}

export const CurriculumModal: React.FC<CurriculumModalProps> = (props) => {
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
                Curriculum
            </Button>

            <Modal className={themeClassname} show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Curriculum</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardDeck
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        {props.curriculum.map((discipline) => {
                            return <DisciplineCard discipline={discipline} />;
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
