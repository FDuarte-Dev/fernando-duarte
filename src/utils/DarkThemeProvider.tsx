import React from "react";
import { State } from "../redux/reducer";
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import theme from "styled-theming";

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

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
`;

class DarkThemeProviderComp extends React.Component<DarkThemeProviderProps> {

  render() {
      let { theme, themedComponents } = this.props;
      return (
        <ThemeProvider theme={{ theme: theme }}>
          <Container className="App">
            {themedComponents}
          </Container>
        </ThemeProvider>
      )
  }
}

export const DarkThemeProvider = connect(mapStateToProps)(DarkThemeProviderComp);