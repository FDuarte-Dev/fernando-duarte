import React from 'react';
import { GITHUB_USERNAME } from '../../../../utils/constants';
import RepoCard from '../cards/RepoCard';
import { GitHubRepo } from '../../model/model';
import { GitHubServices } from '../../services/GitHubServices';
import { CardDeck } from 'react-bootstrap';
import LoadingPage from './LoadingPage';

interface ProjectsPageProps {

}

interface ProjectsPageState {
    repos: GitHubRepo[];
    loading: boolean;
}

export default class ProjectsPage extends React.Component<ProjectsPageProps, ProjectsPageState> {
    constructor(props: ProjectsPageProps) {
        super(props);
        this.state = {
            repos: [],
            loading: true
        }
    }

    componentDidMount() {
        const USERNAME = GITHUB_USERNAME;

        GitHubServices.getUserRepositories(USERNAME, (res: any, err: any) => {
            if (res && res.status === 200) {
                this.setState({repos: res.data, loading: false});
                this.forceUpdate();
            }
        });
    }
    
    render() {
        let {repos, loading} = this.state;
        return (
            <>
            {loading && <LoadingPage />}
            {!loading &&
                <>
                    <CardDeck style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {repos.map(({full_name, name, description, html_url}) => {
                            return <RepoCard full_name={full_name} name={name} description={description} html_url={html_url}/>
                        })}
                    </CardDeck>
                </>
            }
            </>
        );
    }
}
