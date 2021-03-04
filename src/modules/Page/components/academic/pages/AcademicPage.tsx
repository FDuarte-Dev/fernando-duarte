import React from 'react';
import { CardDeck } from 'react-bootstrap';
import DegreeCard from '../cards/DegreeCard';
import { Degree } from '../models/model';
import { ACADEMIC } from '../items/degreesList';

interface AcademicPageProps {

}

interface AcademicPageState {
    degrees: Degree[];
}

export default class AcademicPage extends React.Component<AcademicPageProps, AcademicPageState> {
    constructor(props: AcademicPageProps) {
        super(props);
        this.state = {
            degrees: ACADEMIC
        }
    }

    render() {
        let { degrees } = this.state;
        return (
            <>
            <CardDeck style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                {degrees.map((degree) => {
                    return <DegreeCard degree={degree}/>
                })}
            </CardDeck>
        </>
        );
    }
}
