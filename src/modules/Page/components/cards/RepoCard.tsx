import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { GitHubServices } from '../../services/GitHubServices';
import LoadingCard from './LoadingCard';

interface RepoCardProps {
    full_name: string;
    name: string;
    description: string;
    html_url: string;
}

interface RepoCardState {
    name: string;
    languages: any[];
    description: string;
    html_url: string;
    loading: boolean;
}

export default class RepoCard extends React.Component<RepoCardProps, RepoCardState> {

    constructor(props: RepoCardProps) {
        super(props);
        this.state = {
            name: this.props.name,
            languages: [],
            description: this.props.description,
            html_url: this.props.html_url,
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
        let { name, languages, description, html_url, loading } = this.state;
        return (
            <>
            {loading && <LoadingCard />}
            {!loading &&
                <Card style={{flex: 1, width: '80%'}}>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>{languages.join(', ')}</Card.Text>
                        <Button variant="primary" href={html_url}>Visit</Button>
                    </Card.Body>
                </Card>
            }  
            </>
        );
    }
}