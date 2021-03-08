import moment from 'moment';

import { Work } from "../models/models";

export const WORKS: Work[] = [
    {
        company_name: 'Collab S.A.',
        company_logo: '',
        location: 'Lisbon, Portugal',
        title: 'Software Engineer',
        start_date: moment(new Date(2018, 7)).format("MMM YYYY"),
        end_date: moment(new Date(2020, 7)).format("MMM YYYY"),
        technologies: [
            'C#',
            'C++',
            'Javascript',
            '.NET',
            'Entity Framework',
            'SQL Server',
            'Azure DevOps',
            'Selenium WebDriver'
        ],
        notable_tasks: [
            'Developed REST microservice for asynchronous messaging.',
            'Implemented real-time encryption on a video call service.',
            'Developed integration and functional automated testing, guaranteeing continuous integration.',
            'Worked on development of VoIP call related functionalities using the SIP protocol'
        ]
    },
    {
        company_name: 'Morphis Technologies',
        company_logo: '',
        location: 'Lisbon, Portugal',
        title: 'Software Developer',
        start_date: moment(new Date(2020, 9)).format('MMM YYYY'),
        technologies: [
            'Java',
            'TypeScript',
            'Javascript',
            'Spring Boot',
            'WIP...'
        ],
        notable_tasks: [
            'Developed a Java to XSL bean translator',
            'Implemented a REST API for NLP',
            'Developed a diagram visualization tool using JointJs',
            'WIP...'
        ]
    }
];