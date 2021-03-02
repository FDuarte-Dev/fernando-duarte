import React from 'react';
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
                avatar_url: '',
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
                    <img src={user.avatar_url} alt='user' />
                </>
            }
            </>
        );
    }
}
