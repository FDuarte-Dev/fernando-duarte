import React from "react";
import { store } from "../../../../../redux/store";
import { Button, Card, Col } from "react-bootstrap";
import { GitHubServices } from "../services/GitHubServices";
import { GitHubRepo } from "../models/model";
import LoadingCard from "../../loading/cards/LoadingCard";

interface RepoCardProps {
    repository: GitHubRepo;
}

interface RepoCardState {
    languages: string[];
    readMe_url: string;
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
            readMe_url: '',
            loading: true,
        };
    }

    componentDidMount() {
        GitHubServices.getRepoLanguages(
            this.props.repository.full_name,
            (res: any, err: any) => {
                if (res && res.status === 200) {
                    let langs: string[] = [];
                    for (var lang in res.data) {
                        langs.push(lang);
                    }
                    GitHubServices.getRepoReadME(
                        this.props.repository.full_name,
                        (res: any, err: any) => {
                            if (res && res.status === 200) {
                                let url = res.data.html_url;
                                
                                this.setState({ 
                                    languages: langs, 
                                    loading: false,
                                    readMe_url: url
                                });
                                this.forceUpdate();
                            }
                            else {
                                this.setState({ 
                                    languages: langs, 
                                    loading: false,
                                    readMe_url: ''
                                });
                                this.forceUpdate();
                            }
                        }
                    );
                }
            }
        );
    }

    render() {
        let { languages, loading, readMe_url } = this.state;
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
                                {readMe_url && 
                                    <>
                                        <Col>
                                            <Button variant="outline-info" href={readMe_url}>
                                                View ReadME
                                            </Button>
                                        </Col>
                                        <Col>
                                            <br></br>
                                        </Col>
                                    </>
                                }
                                <Col>
                                    <Button variant="outline-info" href={html_url}>
                                        Open {name} GitHub page
                                    </Button>
                                </Col>
                            </Card.Body>
                            <Card.Footer className="text-muted">
                                Tech stack: {languages.join(", ")}
                            </Card.Footer>
                        </Card>
                        <br></br>
                    </>
                )}
            </>
        );
    }
}
