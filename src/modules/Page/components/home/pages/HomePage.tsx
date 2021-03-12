import React from 'react';
import { GITHUB_USERNAME } from '../../../../../utils/constants';
import { GitHubUser } from '../models/model';
import { GitHubServices } from '../services/GitHubServices';
import LoadingPage from '../../loading/pages/LoadingPage';

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
        const USERNAME = GITHUB_USERNAME;

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
            {loading && <LoadingPage />}
            {!loading &&
                <>
                    <img src={user.avatar_url} alt='user' />
                    <h3>Welcome to my page!</h3>
                    My name is Fernando Duarte and I'm a Software Developer from Portugal.
                    In this webpage you can find a small overview of my progresses in the field, from my studies to my work experiences.
                    Feel free to explore further, and to hit me up with the provided contacts.
                </>
            }
            </>
        );
    }
}
