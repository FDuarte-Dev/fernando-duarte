export interface GitHubUser {
    login: string;
    avatar_url: string;
}

export interface GitHubRepo {
    name: string;
    full_name: string;
    html_url: string;
    description: string;
    created_at: string;
    updated_at: string;
    language: string;
}

export interface Application {
    icon: string;
    name: string;
    description: string;
    html_url: string;
}