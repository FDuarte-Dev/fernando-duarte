import moment from 'moment';

import { Work } from "../models/models";
import { COLLAB_LOGO , MORPHIS_LOGO, CODURANCE_LOGO } from '../../../../../utils/constants';

export const WORKS: Work[] = [
    {
        company_name: 'Codurance Ltd',
        company_logo: CODURANCE_LOGO,
        location: 'London, UK (Remote)',
        title: 'Senior Software Craftsperson',
        start_date: moment(new Date(2022, 5)).format('MMM YYYY'),
        notable_tasks: [
            'Software consulting that emphasizes the software craftsmanship paradigm.',
            'Strong emphasis on TDD, BDD, Refactoring, CI/CD, and other XP practices to guarantee product stability and quality.'
        ],
        projects: [
            {
                project_name: 'Hospitality Sector Project',
                location: 'Spain (Remote)',
                start_date: moment(new Date(2022, 6)).format('MMM YYYY'),
                notable_tasks: [
                    'Revamped the request processing for hotel booking service, resulting in a 20x increase in traffic and an 80% reduction in cost.',
                    'Managed multiple initiatives for continuous product development, leading to a 98.6% decrease in errors.'
                ],
                languages: [
                    '.NET C#',
                    'PHP',
                    'SQL',
                    'Golang',
                    'XML',
                    'JSON'
                ],
                technologies: [
                    'AWS',
                    'Argo CD',
                    'Github Actions',
                    'SonarQube',
                    'Grafana'
                ],
            }
        ]
    },
    {
        company_name: 'Morphis Technologies',
        company_logo: MORPHIS_LOGO,
        location: 'Lisbon, Portugal (Remote)',
        title: 'Software Developer',
        start_date: moment(new Date(2020, 9)).format('MMM YYYY'),
        end_date: moment(new Date(2022, 4)).format('MMM YYYY'),
        languages: [
            'Java',
            'Typescript',
            'JSON'
        ],
        technologies: [
            'Spring Framework',
            'OpenAPI',
            'React',
            'Redux',
            'JointJs',
            'Apache CouchDB'
        ],
        notable_tasks: [
            'Worked on a full-stack, low-code back-office application prioritizing usability for citizen developers to monitor and manage services.',
            'Developed and thoroughly documented an internal REST API to connect the company\'s existing products. '
        ]
    },
    {
        company_name: 'Collab S.A.',
        company_logo: COLLAB_LOGO,
        location: 'Lisbon, Portugal',
        title: 'Software Engineer',
        start_date: moment(new Date(2018, 7)).format("MMM YYYY"),
        end_date: moment(new Date(2020, 7)).format("MMM YYYY"),
        languages: [
            '.NET C#',
            'Javascript',
            'C++'
        ],
        technologies: [
            'Azure DevOps',
            'Selenium WebDriver',
            'Entity Framework'
        ],
        notable_tasks: [
            'Worked on developing a VoIP call software product, focusing on providing a stable and secure means of communication for call center professionals, providing incremental improvements that greatly reduced overhead.',
            'Implemented a RESTful microservice for asynchronous messaging, which was then integrated into the existing product to replace decommissioned providers.'
        ]
    }
];