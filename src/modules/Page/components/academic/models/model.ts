export interface Degree {
    field: string;
    level: EducationLevelEnum;
    institution: string;
    location: string;
    start_date: string;
    end_date: string;
    curriculum: Discipline[];
}

export interface Discipline {
    name: string;
    description: string;
    ects: number;
    projects?: Project[];
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