export interface Work {
    company_name: string;
    company_logo: string;
    title: string;
    start_date: string;
    end_date?: string;
    location: string;
    notable_tasks: string[];
    technologies: string[];
}
