import moment from 'moment';

import { Work } from "../models/models";
import { COLLAB_LOGO , MORPHIS_LOGO } from '../../../../../utils/constants';

export const WORKS: Work[] = [
    {
        company_name: 'Morphis Technologies',
        company_logo: MORPHIS_LOGO,
        location: 'Lisbon, Portugal (Remote)',
        title: 'Software Developer',
        start_date: moment(new Date(2020, 9)).format('MMM YYYY'),
        technologies: [
            'React',
            'TypeScript',
            'Spring',
            'Java',
            'Apache CouchDB',
            'OpenAPI',
            'Redux',
            'JointJs'
        ],
        notable_tasks: [
            'Working full stack on a React application with Java and CouchDB backend.',
            'Development on a low code / no code React application for citizen developers.',
            'REST API development, implementation, and documentation.',
            'Developed Rappid diagram visualization tool.'
        ]
    },
    {
        company_name: 'Collab S.A.',
        company_logo: COLLAB_LOGO,
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
            'Worked on development of VoIP call related functionalities using the SIP protocol.'
        ]
    }
];