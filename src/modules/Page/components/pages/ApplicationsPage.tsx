import React from 'react';
import LoadingPage from './LoadingPage';
import { CardDeck } from 'react-bootstrap';
import ApplicationCard from '../cards/ApplicationCard';

interface ApplicationsPageProps {

}

interface ApplicationsPageState {
    
    loading: boolean;
}

export default class ApplicationsPage extends React.Component<ApplicationsPageProps, ApplicationsPageState> {
    constructor(props: ApplicationsPageProps) {
        super(props);
        this.state = {
            loading: true
        }
    }

    render() {
        return (
            <>
                <h1>Applications</h1>
                <CardDeck style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    {/* {repos.map(({full_name, name, description, html_url}) => {
                        return <RepoCard full_name={full_name} name={name} description={description} html_url={html_url}/>
                    })} */}
                    <ApplicationCard />
                </CardDeck>
            </>
        );
    }
}
