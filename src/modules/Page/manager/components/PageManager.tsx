import React from 'react';
import { connect } from 'react-redux';
import { State } from '../../../../redux/reducer';
import HomePage from '../../components/home/pages/HomePage';
import AcademicPage from '../../components/academic/pages/AcademicPage';
import WorkExperiencePage from '../../components/workexperience/pages/WorkExperiencePage';
import ProjectsPage from '../../components/projects/pages/ProjectsPage';
import ApplicationsPage from '../../components/applications/pages/ApplicationsPage';
import ContactsPage from '../../components/contacts/pages/ContactsPage';
import NotFoundPage from '../../components/notfound/pages/NotFoundPage';

interface PageManagerProps {
    page: string
}

const mapStateToProps = (state: State) => {
    return {
        page: state.page
    };
}


class PageManagerComp extends React.Component<PageManagerProps> {

    getCurrentPage(page: string) {
        switch (page) {
            case 'home':
                return HomePage;
            case 'academic':
                return AcademicPage;
            case 'work-experience':
                return WorkExperiencePage;
            case 'projects':
                return ProjectsPage;
            case 'applications':
                return ApplicationsPage;
            case 'contacts':
                return ContactsPage;
            default:
                return NotFoundPage;
        }
    }

    render() {
        let Page = this.getCurrentPage(this.props.page);
        return (
            <div>
                <Page />
            </div>
        )
    }
}

export const PageManager = connect(mapStateToProps)(PageManagerComp);