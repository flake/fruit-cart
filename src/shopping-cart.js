import React from 'react'
import { connect } from 'react-redux'

import CartItem from './cart-item'

class ShoppingCart extends React.Component {

  render () {

    const { items, totalItems } = this.props;

    let itemKeys = Object.keys(items);
    let totalAmount = 0;
    for (let key in items) {
      console.log("item for ", items[key]);
      totalAmount = totalAmount + (items[key].quantity * items[key].product.price);
    }

    return (
      <div className="shopping-cart">
        <div className="cart-header">
          <span className="cart-title">Shopping Cart</span>
          <span className="cart-subtitle">{totalItems} items</span>
        </div>
        {
          itemKeys.map((ikey) => <CartItem key={ikey} item={items[ikey]} />)
        }
        <hr className= "cart-hrline" />
        <div className="cart-total">Total: ${totalAmount}</div>
      </div>
    )
  }
}

export default connect (
  (state) => ({
    items: state.app.cartItems,
    totalItems: state.app.totalItems
  }),
  (dispatch) => ({})
)(ShoppingCart);
