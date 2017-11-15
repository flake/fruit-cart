import React, { Component } from 'react'
import { connect } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles'
import Grid from 'material-ui/Grid'
import teal from 'material-ui/colors/teal'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

import './App.css'

import fruitsData from './store_items.json'
import FruitList from './fruit-list'
import ShoppingCart from './shopping-cart'
import { loadFruits } from './app-actions'

const muiTheme = createMuiTheme({
  palette: {
    primary: {...teal, 500: "#32C996" }
  }
});

class App extends Component {

  componentDidMount () {
    if (this.props.fruits.length === 0) {
      this.props.loadFruits(fruitsData);
    }
  }

  render () {

    const { fruits } = this.props;
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
              <ShoppingCart />
            </Grid>
          </Grid>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect (
  (state) => ({
    fruits: state.app.fruits
  }),
  (dispatch) => ({
    loadFruits: (fruits) => dispatch(loadFruits(fruits)),
  })
)(App);
