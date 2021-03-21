import { Application } from '../models/model';
import { CALCULADORA_VOCAL_LOGO, 
         DECISION_MAKER_LOGO, 
         MORSE_TRANSLATOR_LOGO } from  '../../../../../utils/constants';

export const APPS: Application[] = [
    {
        name: 'Calculadora vocal',
        description: 'Voice controled calculator in portuguese',
        html_url: 'https://play.google.com/store/apps/details?id=fduarte.appz.calculadoravocal',
        icon: CALCULADORA_VOCAL_LOGO
    },
    {
        name: 'Decision Maker',
        description: 'Application to randomly choose from a pool of choices',
        html_url: 'https://play.google.com/store/apps/details?id=fduarte.appz',
        icon: DECISION_MAKER_LOGO
    },
    {
        name: 'Morse Translator',
        description: 'Application to translate text to morse code with sound or light alerts',
        html_url: 'https://play.google.com/store/apps/details?id=fduarte.appz.morsetranslator',
        icon: MORSE_TRANSLATOR_LOGO
    }
]