import React from 'react';
import { connect } from 'react-redux';
import HeaderNavBar from '../../components/HeaderNavBar'

class HeaderManagerComp extends React.Component {

    render() {
        return (
            <HeaderNavBar />
        )
    }
}

export const HeaderManager = connect()(HeaderManagerComp);