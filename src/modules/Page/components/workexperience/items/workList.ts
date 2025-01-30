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
            'Participated in the technical effort by implementing solutions in an Agile/Kanban environment. Focusing on TDD, CI/CD, Coding standards, and other XP practices to ensure product stability and quality. ',
            'Led development teams in implementations across the software development lifecycle, from concept to deployment, providing constructive feedback, focusing on transferring knowledge, and managing workloads and backlogs. ',
            'Held meetings with stakeholders to align recommendations with their goals and effectively communicated challenges and opportunities based on their technical understanding. '
        ],
        projects: [
            {
                project_name: 'Hospitality Sector Project',
                location: 'Spain / Romania (Remote)',
                start_date: moment(new Date(2022, 6)).format('MMM YYYY'),
                notable_tasks: [
                    'Implemented a DB caching mechanism in Golang to integrate with a MySQL database, optimizing data accesses and troubleshooting integration issues. ',
                    'Modernized an existing legacy request processing PHP application in .NET, implementing new data flows and applying object-oriented programming principles to achieve a reduction of processing errors of around 95%. ',
                    'Designed, implemented and analyzed an automatic scaling mechanism for the internal .NET applications, leveraging Kubernetes HPA, Prometheus, and ASP.NET, allowing the system to increase traffic by 20x (and rising) in a stable manner, with visible metrics presented on Grafana. ',
                    'Delivered impactful implementations, making use of .NET, AWS, GitHub Actions, Argo CD, and version control systems like Git, resulting in a reduction of around 80% in costs. '
                ],
                languages: [
                    'C#',
                    'PHP',
                    'SQL',
                    'Golang',
                    'XML',
                    'JSON'
                ],
                technologies: [
                    '.NET','.NET Core','ASP.NET',
                    'MySQL', 'DynamoDB',
                    'Github Actions',
                    'AWS',
                    'SonarQube', 'Grafana','ArgoCD',
                    'Docker', 'Kubernetes', 'Prometheus'
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
            'Spring Framework', 'Open API', 'Hibernate', 'JPA',
            'React', 'Redux',
            'Apache CouchDB'
        ],
        notable_tasks: [
            'Developed RESTful APIs using Java Spring Boot and created specifications using Open API, leveraging Hibernate and JPA to optimize interactions with an Apache CouchDB database.',
            'Integrated several internal products in a centralized API, with JSON formatted data, to make the interactions between them more streamlined and efficient.  ',
            'Using Typescript and React, built an application to help non-technical users create and manage the necessary visualizations and workflows for business management. ',
            'Delivered technical demonstrations to prospective clients, presenting current and upcoming features, and gathered data from the feedback from those presentations to adjust development plans. '
            
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
            'C#',
            'Javascript',
            'C++'
        ],
        technologies: [
            '.NET', '.NET Framework', '.NET Core',
            'Azure DevOps',
            'Selenium WebDriver',
            'Entity Framework Core', 'LINQ'
        ],
        notable_tasks: [
            'Implemented a new workstream of automated testing using a cross-functional teams’ approach, leveraging painpoints from QA, Support and Client teams. ',
            'Created dynamic test suites for VoIP call stability with Selenium WebDriver, making use of .NET Framework, C#, C++ and JavaScript in an Azure environment. ',
            'Made use of Azure DevOps (formerly Team Foundation Server) to manage CI/CD pipelines, and development environments using VMs.',
            'Maintained existing .NET codebases in a Telecoms context, using C# and C++, by debugging and resolving issues, providing bug fixes, and documenting processes for silo breakdown and knowledge transfers',
            'Enhanced .NET codebases in a Telecoms context, using C# and C++, improving stability, performance, design, and security. ',
            'Modernized the back end of an application for end-to-end chat messaging in .NET Core, leveraging Entity Framework Core and LINQ in a Code First approach. ',
        ]
    }
];
