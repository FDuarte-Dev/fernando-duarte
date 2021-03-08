import React from 'react';
import { CardDeck } from 'react-bootstrap';
import WorkExperienceCard from '../cards/WorkExperienceCard';
import { WORKS } from '../items/workList';
import { Work } from '../models/models';

interface WorkExperiencePageProps {}

interface WorkExperiencePageState {
    works: Work[];
}

export default class WorkExperiencePage extends React.Component<WorkExperiencePageProps, WorkExperiencePageState> {
    constructor(props: WorkExperiencePageProps) {
        super(props);
        this.state = {
            works: WORKS
        }
    }

    render() {
        let { works } = this.state;
        return (
            <>
                <CardDeck style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {works.map((work) => {
                        return <WorkExperienceCard work={work}/>
                    })}
                </CardDeck>
            </>
        );
    }
}
