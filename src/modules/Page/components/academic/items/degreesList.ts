import { Degree, EducationLevelEnum } from '../models/model';

export const ACADEMIC: Degree[] = [
    {
        field: 'Computer Science and Engineering',
        institution: 'Instituto Superior Técnico',
        location: 'Lisbon - Portugal',
        level: EducationLevelEnum.BACHELOR,
        startDate: new Date('2014-09-09').toLocaleDateString(),
        endDate: new Date('2018-07-10').toLocaleDateString(),
        curriculum: [
            {
                name: 'Fundamentos da Programação',
                ects: 7.5,
                projects: [
                    {
                        name: 'Credit card generator',
                        description: 'Create a card generator.'
                    },
                    {
                        name: '2048 Game',
                        description: 'Create a version of the game 2048.'
                    }
                ]
            }
            // TODO: Add remaining information
        ]
    }
]