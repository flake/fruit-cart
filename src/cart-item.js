import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import RemoveIcon from 'material-ui-icons/Remove'
import Card from 'material-ui/Card'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { connect } from 'react-redux'

import { removeFromCart, addToCart, decreaseQuantity } from './app-actions'

const styles = theme => ({
  itemCard: {
    backgroundColor: '#6FD9B5',
    padding: '8px 0 0 32px',
    marginTop: '8px'
  },
  calcIcon: {
    backgroundColor: 'white',
    color: '#333',
    margin: 'auto 0',
    borderRadius: '4px',
    width: '32px',
    height: '32px'
  },
  deleteBtn: {
    minHeight: 0,
    padding: '4px 0',
    color: 'white'
  }
});

class CartItem extends React.Component {

  render () {

    const {
      item,
      classes,
      addToCart,
      removeFromCart,
      decreaseQuantity,
    } = this.props;

    return (
      <Card className={classes.itemCard}>
        <div className="flex-row">
          <div><img src={item.product.imgSrc} width="64px" height="64px" className="cart-item-image"/></div>
          <div className="flex-row">
            <IconButton
              className={classes.calcIcon}
              onClick={() => decreaseQuantity(item.product.itemName)}
            ><RemoveIcon /></IconButton>
              <span className="cart-item-quantity">{item.quantity}</span>
            <IconButton
              className={classes.calcIcon}
              onClick={() => addToCart(item.product)}
            ><AddIcon /></IconButton>
          </div>
        </div>
        <div className="flex-row cart-item-footer">
          <div className="cart-item-value">@ ${item.product.price} each = ${item.quantity * item.product.price}</div>
          <Button
            color="default"
            className={classes.deleteBtn}
            onClick={() => removeFromCart(item.product.itemName)}
          >Delete</Button>
        </div>
      </Card>
    )
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default connect (
  (state) => ({
    totalItems: state.app.totalItems
  }),
  (dispatch) => ({
    addToCart: (product) => dispatch(addToCart(product)),
    removeFromCart: (itemName) => dispatch(removeFromCart(itemName)),
    decreaseQuantity: (itemName) => dispatch(decreaseQuantity(itemName))
  })
)(withStyles(styles)(CartItem));
