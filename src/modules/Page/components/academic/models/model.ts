export interface Degree {
    field: string;
    level: EducationLevelEnum;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
    curriculum: Discipline[];
}

export interface Discipline {
    name: string;
    ects: number;
    projects: Project[];
}

export interface Project {
    name: string;
    description: string;
}

export enum EducationLevelEnum {
    BACHELOR = 'Bachelor\'s degree',
    MASTERS = 'Master\'s degree',
    DOCTORATE = 'PhD'
}