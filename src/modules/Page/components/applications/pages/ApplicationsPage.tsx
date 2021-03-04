import React from 'react';
import { CardDeck } from 'react-bootstrap';
import ApplicationCard from '../cards/ApplicationCard';
import { Application } from '../models/model';
import { APPS } from '../items/applicationsList';

interface ApplicationsPageProps {

}

interface ApplicationsPageState {
    applications: Application[];
}

export default class ApplicationsPage extends React.Component<ApplicationsPageProps, ApplicationsPageState> {
    constructor(props: ApplicationsPageProps) {
        super(props);
        this.state = {
            applications: APPS
        }
    }

    render() {
        let { applications } = this.state;
        return (
            <>
                <CardDeck style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {applications.map((application) => {
                        return <ApplicationCard application={application}/>
                    })}
                </CardDeck>
            </>
        );
    }
}
