import React from 'react';
import { State } from '../../../../redux/reducer';
import { connect } from 'react-redux';
import FooterNavBar from '../../components/FooterNavBar'

interface FooterManagerProps {
    page: string,
    theme: string
}

const mapStateToProps = (state: State) => {
    return {
        page: state.page,
        theme: state.theme
    };
}

class FooterManagerComp extends React.Component<FooterManagerProps> {

    render() {
        return (
            <FooterNavBar theme={this.props.theme}/>
        )
    }
}

export const FooterManager = connect(mapStateToProps)(FooterManagerComp);