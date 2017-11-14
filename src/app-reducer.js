import { AppActions } from './app-constants'

const getInitialState = () => {
  return {
    fruits: [],
    cartItems: []
  }
}

export default const app = (state = getInitialState(), action) => {
  switch (action.type) {
    case AppActions.ITEM.ADD:

      return state;
    default:
      return state;
  }
}
