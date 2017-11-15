import { AppActions } from './app-constants'

export const loadFruits = (fruits) => ({
  type: AppActions.FRUITS.LOAD,
  fruits
});

export const addToCart = (product) => ({
  type: AppActions.ITEM.ADD,
  product
});

export const removeFromCart = (itemName) => ({
  type: AppActions.ITEM.REMOVE,
  name: itemName
});

export const decreaseQuantity = (itemName) => ({
  type: AppActions.ITEM.DECREASE,
  name: itemName
});

export const confirmPurchase = () => ({
  type: AppActions.CART.PURCHASE
});

export const clearCart = () => ({
  type: AppActions.CART.CLEAR
})
