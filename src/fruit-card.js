import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

import { addToCart } from './app-actions'

const styles = theme => ({
  fruitCard: {}
});

class FruitCard extends React.Component {

  render () {
    const { classes, fruit , addToCart } = this.props;

    let disableAdd = fruit.quantityRemaining ? false : true;

    return (
      <Card>
        <CardContent>
          <div>
            <img src={fruit.imgSrc} width="100%" height="240px" />
          </div>
          <Typography type="headline" component="h3">
            {fruit.itemName}
          </Typography>
          <div>
            <span className="product-price">${fruit.price}</span> {fruit.quantityRemaining} in stock
          </div>
        </CardContent>
        <CardActions>
          <Button raised
            color="primary"
            onClick={() => addToCart(fruit)}
            disabled={disableAdd}
          >Add to Cart</Button>
        </CardActions>
      </Card>
    )
  }
}

FruitCard.propTypes = {
  fruit: PropTypes.object.isRequired
}

export default connect(
  (state) => ({
    totalCount: state.app.totalItems,
  }),
  (dispatch) => ({
    addToCart: (fruit) => dispatch(addToCart(fruit)),
  })
)(withStyles(styles)(FruitCard));
