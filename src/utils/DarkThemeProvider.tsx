import React from "react";
import { ThemeProvider } from "styled-components";
import { State } from "../redux/reducer";
import { connect } from 'react-redux';

interface DarkThemeProviderProps {
  page: string,
  theme: string,
  themedComponents: any
}

const mapStateToProps = (state: State) => {
  return {
      page: state.page,
      theme: state.theme
  };
}


class DarkThemeProviderComp extends React.Component<DarkThemeProviderProps> {

  render() {
      let { theme, themedComponents } = this.props;
      return (
        <ThemeProvider theme={{ theme: theme }}>
          {themedComponents}
        </ThemeProvider>
      )
  }
}

export const DarkThemeProvider = connect(mapStateToProps)(DarkThemeProviderComp);