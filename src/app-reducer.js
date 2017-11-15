import { AppActions } from './app-constants'

const getInitialState = () => {
  return {
    fruits: [],
    cartItems: {},
    totalItems: 0,
  }
}

export default (state = getInitialState(), action) => {
  // let newItem = {
  //   quantity: 0,
  //   product: action.product
  // };
  // let currentItems = state.cartItems;
  // let oldItem = currentItems.find(item => item.name === action.product.itemName);

  switch (action.type) {
    case AppActions.FRUITS.LOAD:
      return {
        ...state,
        fruits: action.fruits,
        cartItems: [],
        totalItems: 0
      }
    case AppActions.ITEM.ADD:
      let stockIndex = state.fruits.findIndex(f => f.itemName === action.product.itemName);
      let newFruits = [...state.fruits];
      if (newFruits[stockIndex].quantityRemaining < 1) {
        return state;
      }
      // newFruits[stockIndex] = { ...newFruits[stockIndex], quantityRemaining: newFruits[stockIndex].quantityRemaining - 1};

      let newQuant = state.cartItems.hasOwnProperty(action.product.itemName) ? state.cartItems[action.product.itemName].quantity + 1 : 1;

      return {
        ...state,
        fruits: updateStock([...state.fruits], action.product.itemName, -1),
        cartItems: { ...state.cartItems, [action.product.itemName]: { quantity: newQuant, product: action.product}},
        totalItems: state.totalItems + 1
      }

    case AppActions.ITEM.DECREASE:
      let citems = { ...state.cartItems };
      if (citems.hasOwnProperty(action.name)) {
        citems[action.name].quantity = citems[action.name].quantity - 1;
        if (citems[action.name].quantity < 1) {
          delete citems[action.name];
        }

        return {
          ...state,
          fruits: updateStock([...state.fruits], action.name, 1),
          cartItems: { ...citems },
          totalItems: state.totalItems - 1
        }
      }
      return state;

    case AppActions.ITEM.REMOVE:
      if (state.cartItems.hasOwnProperty(action.name)) {
        let newItems = { ...state.cartItems };
        let newTotal = state.totalItems - newItems[action.name].quantity;
        delete newItems[action.name];
        return {
          ...state,
          fruits: updateStock([...state.fruits], action.name, state.cartItems[action.name].quantity),
          cartItems: { ...newItems },
          totalItems: newTotal
        }
      }
      return state;
    case AppActions.CART.PURCHASE:
      return {
        ...state,
        cartItems: {},
        totalItems: 0
      }
    case AppActions.CART.CLEAR:
      let clearFruits = [...state.fruits];
      for (let ckey in state.cartItems) {
        let sindex = clearFruits.findIndex(f => f.itemName === ckey);
        console.log("sindex ", sindex, state.cartItems[ckey]);
        clearFruits[sindex].quantityRemaining = clearFruits[sindex].quantityRemaining + state.cartItems[ckey].quantity;
        console.log("clearFruits ", clearFruits);
      }
      return {
        ...state,
        fruits: clearFruits,
        cartItems: {},
        totalItems: 0
      }
    default:
      return state;
  }
}


function updateStock (stock, itemName, quantity) {
  let stockIndex = stock.findIndex(s => s.itemName === itemName);
  stock[stockIndex] = { ...stock[stockIndex], quantityRemaining: stock[stockIndex].quantityRemaining + quantity };

  return stock;
}
