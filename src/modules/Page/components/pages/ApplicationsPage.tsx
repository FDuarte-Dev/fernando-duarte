import React from 'react';
import LoadingPage from './LoadingPage';
import { CardDeck } from 'react-bootstrap';
import ApplicationCard from '../cards/ApplicationCard';
import { Application } from '../../model/model';
import { APPS } from '../../../../utils/applicationsList';

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
                <h1>Applications</h1>
                <CardDeck style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {applications.map((application) => {
                        return <ApplicationCard application={application}/>
                    })}
                </CardDeck>
            </>
        );
    }
}
