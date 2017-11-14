import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'

const styles = theme => ({
  fruitCard: {}
});

class FruitCard extends React.Component {

  render () {
    const { classes, fruit } = this.props;
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
            <span>${fruit.price}</span> {fruit.quantityRemaining} in stock
          </div>
        </CardContent>
        <CardActions>
          <Button raised
            color="primary"
          >Add to Cart</Button>
        </CardActions>
      </Card>
    )
  }
}

FruitCard.propTypes = {
  fruit: PropTypes.object.isRequired
}

export default withStyles(styles)(FruitCard);
