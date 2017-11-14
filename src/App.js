import React, { Component } from 'react'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import green from 'material-ui/colors/green'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

import './App.css'

import fruits from './store_items.json'
import FruitList from './fruit-list'

const muiTheme = createMuiTheme({
  palette: {
    primary: {...green, 500: "#117930" }
  }
});

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={muiTheme}>
        <div>
          <AppBar position="static" color="default">
            <Toolbar>
              <span>Fruits</span>
            </Toolbar>
          </AppBar>
          <Grid container spacing={8}>
            <Grid item lg={9}>
              <FruitList fruits={fruits} />
            </Grid>
            <Grid item lg={3}>
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
