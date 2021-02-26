import React from 'react';
import { connect } from 'react-redux';
import FooterNavBar from '../../components/FooterNavBar'

class FooterManagerComp extends React.Component {

    render() {
        return (
            <FooterNavBar />
        )
    }
}

export const FooterManager = connect()(FooterManagerComp);