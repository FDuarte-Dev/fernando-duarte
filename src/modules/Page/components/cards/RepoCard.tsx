import React from 'react';
import { GitHubServices } from '../../services/GitHubServices';

interface RepoCardProps {
    full_name: string;
    name: string;
    description: string;
}

interface RepoCardState {
    name: string;
    languages: any[];
    description: string;
    loading: boolean;
}

export default class RepoCard extends React.Component<RepoCardProps, RepoCardState> {

    constructor(props: RepoCardProps) {
        super(props);
        this.state = {
            name: this.props.name,
            languages: [],
            description: this.props.description,
            loading: true
        }
    }

    componentDidMount() {

        GitHubServices.getRepoLanguages(this.props.full_name, (res: any, err: any) => {
            if (res && res.status === 200) { 
                let langs = []
                for(var lang in res.data){
                    langs.push(lang);
                }
                this.setState({languages: langs, loading: false});
                this.forceUpdate();
            }
        });
    }
    

    render() {
        let { name, languages, description, loading } = this.state;
        return (
            <>
            {loading && 
                <h1>Loading Card</h1>
            }
            {!loading &&
                <>
                    <h3>name: {name}</h3>
                    <h4>description: {description}</h4>
                    <h5>language{languages.length > 1 ? 's' : '' }: {languages.join(', ')}</h5>
                    <h3>----------------------------------------</h3>
                </>
            }  
            </>
        );
    }
}