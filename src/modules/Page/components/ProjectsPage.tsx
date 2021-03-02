import React from 'react';
import { GitHubRepo } from '../model/model';
import { GitHubServices } from '../services/GitHubServices';

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
        const USERNAME = 'FDuarte-Dev';

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
            {loading && 
                <h1>Loading Home Page Component</h1>
            }
            {!loading &&
                <>
                    <h1>Number of repos: {repos.length}</h1>
                </>
            }
            </>
        );
    }
}
