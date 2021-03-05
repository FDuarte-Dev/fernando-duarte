import { Degree, EducationLevelEnum } from '../models/model';
import * as disciplines from './disciplinesList';

export const ACADEMIC: Degree[] = [
    {
        field: 'Computer Science and Engineering',
        institution: 'Instituto Superior Técnico',
        location: 'Lisbon - Portugal',
        level: EducationLevelEnum.BACHELOR,
        startDate: new Date('2014-09-09').toLocaleDateString(),
        endDate: new Date('2018-07-10').toLocaleDateString(),
        curriculum: [
            disciplines.FP,
            disciplines.IAC,
            disciplines.IAED,
            disciplines.LP,
            disciplines.SO,
            disciplines.ASA,
            disciplines.IPM,
            disciplines.BD,
            disciplines.CG,
            disciplines.IA,
            disciplines.OC,
            disciplines.PO,
            disciplines.ES,
            disciplines.SD,
            disciplines.RC,
            disciplines.AMS,
            disciplines.COMP,
            disciplines.AL,
            disciplines.MD,
            disciplines.MO,
            disciplines.CDI_I,
            disciplines.EO,
            disciplines.TC,
            disciplines.CDI_II,
            disciplines.PE,
            disciplines.ACED,
            disciplines.IEI,
            disciplines.GES,
            disciplines.CS
        ]
    }
]