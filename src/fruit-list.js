import React from 'react'
import Grid from 'material-ui/Grid'

import FruitCard from './fruit-card'

class FruitList extends React.Component {

  render () {
    const { fruits } = this.props;

    return (
      <Grid container spacing={8}>
        {
          fruits.map((fruit, i) => {
            return (
              <Grid item lg={3} md={4} sm={6} xs={12} key={i}>
                <FruitCard fruit={fruit} />
              </Grid>
            )
          })
        }
      </Grid>
    )
  }
}

export default FruitList;
