import React from "react";
import { store } from "../../../redux/store";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Form } from "react-bootstrap";

interface HeaderNavBarProps {
    theme: string;
}

interface HeaderNavBarState {
    theme: string;
}

export default class HeaderNavBar extends React.Component<HeaderNavBarProps, HeaderNavBarState> {
    constructor (props: HeaderNavBarProps) {
        super(props);
        this.state = {
            theme: props.theme
        };
    }

    handleChangePage = (page: string) => (e: any) => {
        e.preventDefault();
        store.dispatch({ type: "CHANGE_PAGE", page: page });
    };

    isSwitchOn = true;

    handleToggleTheme = () => (e: any) => {
        let theme = store.getState().theme === "light" ? "dark" : "light";
        store.dispatch({ type: "CHANGE_THEME", theme: theme });
        console.log(theme);
    };

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand onClick={this.handleChangePage("home")}>
                    Fernando Duarte
                </Navbar.Brand>
                <Form.Switch 
                    onChange={this.handleToggleTheme()}
                    type="switch"
                    id="custom-switch"
                    label="Change Theme"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link onClick={this.handleChangePage("home")}>
                            Home
                        </Nav.Link>
                        <Nav.Link onClick={this.handleChangePage("academic")}>
                            Academic
                        </Nav.Link>
                        <Nav.Link
                            onClick={this.handleChangePage("work-experience")}
                        >
                            Work Experience
                        </Nav.Link>
                        <Nav.Link onClick={this.handleChangePage("projects")}>
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            onClick={this.handleChangePage("applications")}
                        >
                            Applications
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
