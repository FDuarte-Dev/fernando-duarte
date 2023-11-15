import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import { Project } from '../models/models';
import ProjectsCard from "./ProjectsCard";

interface ProjectsDeckProps {
    projects: Project[];
}

interface ProjectsDeckState {}

export default class ProjectsDeck extends React.Component<ProjectsDeckProps, ProjectsDeckState> {
    render() {
        let { projects } = this.props;
        return (
            <Container className='page-container'>
                <CardDeck style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {projects.map((project) => {
                        return <ProjectsCard project={project}/>
                    })}
                </CardDeck>
            </Container>
        );
    }
}
