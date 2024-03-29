import React from 'react';
import { GITHUB_USERNAME } from '../../../../../utils/constants';
import RepoCard from '../cards/RepoCard';
import { GitHubRepo } from '../models/model';
import { GitHubServices } from '../services/GitHubServices';
import { CardDeck, Container } from 'react-bootstrap';
import LoadingPage from '../../loading/pages/LoadingPage';

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
                <Container className='page-container'>
                    <CardDeck style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        {repos.map((repo) => {
                            return <RepoCard repository={repo}/>
                        })}
                    </CardDeck>
                </Container>
            }
            </>
        );
    }
}
