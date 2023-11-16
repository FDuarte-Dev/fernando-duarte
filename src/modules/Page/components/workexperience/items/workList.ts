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
            'Software consulting focused on the software craftsmanship paradigm.',
            'Strong application of TDD, BDD, Refactoring, CI/CD, and other XP practices to ensure the stability and quality of the developed products.'
        ],
        projects: [
            {
                project_name: 'Hotelier Project',
                location: 'Spain (Remote)',
                start_date: moment(new Date(2022, 6)).format('MMM YYYY'),
                notable_tasks: [
                    'Implemented request processing for hotel booking service resulting in a 20x increase in traffic.'
                ],
                languages: [
                    '.NET C#',
                    'SQL',
                    'XML',
                    'Go'
                ],
                technologies: [
                    'AWS',
                    'ArgoCD',
                    'Github Actions'
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
            'Worked full stack on a low-code back-office application that focused its usability on citizen developers, giving them the ability to monitor and manage the service’s workflows, using React with a Java and CouchDB backend.',
            'Implemented and fully documented an internal REST API to bridge the existing company’s products.'
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
            'Worked in the development of a Voice and Video over IP, call software product, focusing on providing a stable and secure means of communication for call-center professionals, focusing on incremental improvements that greatly reduced overhead.',
            'Implemented a RESTful microservice for asynchronous messaging, which was then integrated into the existing product to replace decommissioned providers.'
        ]
    }
];