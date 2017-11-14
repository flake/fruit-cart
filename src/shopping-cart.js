import React from 'react'
import { connect } from 'react-redux'

import CartItem from './cart-item'

class ShoppingCart extends React.Component {

  render () {

    const { items } = this.props;

    return (
      <div>
        {
          items.map((item, i) => <CartItem key={i} item={item} />)
        }
      </div>
    )
  }
}

export default connect (
  (state) => ({
    items: state.app.cartItems
  }),
  (dispatch) => ({})
)(ShoppingCart);
