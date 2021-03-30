import React from 'react';
import { State } from '../../../../redux/reducer';
import { connect } from 'react-redux';
import HeaderNavBar from '../../components/HeaderNavBar'

interface HeaderManagerProps {
    page: string,
    theme: string
}

const mapStateToProps = (state: State) => {
    return {
        page: state.page,
        theme: state.theme
    };
}

class HeaderManagerComp extends React.Component<HeaderManagerProps> {

    render() {
        return (
            <>
                <HeaderNavBar theme={this.props.theme}/>
                <br></br>
            </>
        )
    }
}

export const HeaderManager = connect(mapStateToProps)(HeaderManagerComp);