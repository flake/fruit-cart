import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import IconButton from 'material-ui/IconButton'
import AddIcon from 'material-ui-icons/Add'
import RemoveIcon from 'material-ui-icons/Remove'

class CartItem extends React.Component {

  render () {

    const { item } = this.props;

    return (
      <Card>
        <div className="flex-row">
          <div><img src={item.product.imgSrc} width="96px" height="96px"/></div>
          <div className="flex-row">
            <IconButton ><AddIcon /></IconButton>
              {item.quantity}
            <IconButton ><RemoveIcon /></IconButton>
          </div>
        </div>
        <div className="flex-row"></div>
      </Card>
    )
  }
}

CartItem.propTypes = {
  item: PropTypes.object.isRequired
}

export default CartItem;
