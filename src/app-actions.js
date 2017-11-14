import { AppActions } from './app-constants'

export const addToCart = (product) => ({
  type: AppActions.ITEM.ADD,
  product
});
