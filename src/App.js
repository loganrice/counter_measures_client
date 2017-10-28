import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import {teal500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: teal500,
  },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <AppBar
          title="Title"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <RaisedButton label="default" />
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </MuiThemeProvider>
    );
  }
}

export default App;
