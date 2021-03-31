import React from "react";
import { store } from "../../../../../redux/store";
import { Button, Card } from "react-bootstrap";
import { GitHubServices } from "../services/GitHubServices";
import { GitHubRepo } from "../models/model";
import LoadingCard from "../../loading/cards/LoadingCard";

interface RepoCardProps {
    repository: GitHubRepo;
}

interface RepoCardState {
    languages: any[];
    loading: boolean;
}

export default class RepoCard extends React.Component<
    RepoCardProps,
    RepoCardState
> {
    constructor(props: RepoCardProps) {
        super(props);
        this.state = {
            languages: [],
            loading: true,
        };
    }

    componentDidMount() {
        GitHubServices.getRepoLanguages(
            this.props.repository.full_name,
            (res: any, err: any) => {
                if (res && res.status === 200) {
                    let langs = [];
                    for (var lang in res.data) {
                        langs.push(lang);
                    }
                    this.setState({ languages: langs, loading: false });
                    this.forceUpdate();
                }
            }
        );
    }

    render() {
        let { languages, loading } = this.state;
        let { name, description, html_url } = this.props.repository;
        let { theme } = store.getState();
        return (
            <>
                {loading && <LoadingCard />}
                {!loading && (
                    <>
                        <Card 
                            bg={theme} 
                            text={ theme === 'light' ? 'dark' : 'white'} 
                            style={{ flex: 1, width: "80%" }}>
                            <Card.Header>
                                <h5>
                                    {name}
                                </h5>
                            </Card.Header>
                            <Card.Body>
                                <Card.Text>{description}</Card.Text>
                                <Card.Text>
                                    Tech stack: {languages.join(", ")}
                                </Card.Text>
                                <Button variant="outline-info" href={html_url}>
                                    Visit
                                </Button>
                            </Card.Body>
                        </Card>
                        <br></br>
                    </>
                )}
            </>
        );
    }
}
