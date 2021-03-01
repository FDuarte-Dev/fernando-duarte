import React from 'react';
import { isUndefined } from 'util';
import { GitHubUser } from '../model/model';
import { GitHubServices } from '../services/GitHubServices';

interface HomePageProps {

}

interface HomePageState {
    user: GitHubUser;
    loading: boolean;
}

export default class HomePage extends React.Component<HomePageProps, HomePageState> {

    constructor(props: HomePageProps) {
        super(props);
        this.state = {
            user: {
                login: '',
                id: 0,
                node_id: '',
                avatar_url: '',
                gravatar_id: '',
                url: '',
                html_url: '',
                followers_url: '',
                following_url: '',
                gists_url: '',
                starred_url: '',
                subscriptions_url: '',
                organizations_url: '',
                repos_url: '',
                events_url: '',
                received_events_url: '',
                type: '',
                site_admin: false,
                name: undefined,
                company: undefined,
                blog: '',
                location: undefined,
                email: undefined,
                hireable: undefined,
                bio: '',
                twitter_username: undefined,
                public_repos: 0,
                public_gists: 0,
                followers: 0,
                following: 0,
                created_at: '',
                updated_at: ''
            },
            loading: true
        };
    }

    componentDidMount() {
        const USERNAME = 'FDuarte-Dev';

        GitHubServices.getUser(USERNAME, (res: any, err:any) => {
            if (res && res.status === 200) {
                this.setState({user: res.data, loading: false});
                this.forceUpdate();
            }
        });
    }

    render() {
        let { user, loading } = this.state;
        return (
            <>
            {loading && 
                <h1>Loading Home Page Component</h1>
            }
            {!loading &&
                <>
                    <h1>{user.login}</h1>
                    <img src={user.avatar_url} alt='user'/>
                </>
            }
            </>
        );
    }
}
