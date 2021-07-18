const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const buy_food = "buyFood";
const buy_clothing = "buyClothing";

const buyFood = () => {
  return {
    type: buy_food,
  };
};

const buyClothing = () => {
  return {
    type: buy_clothing,
  };
};

const initialStateFood = {
  numberOfFoods: 10,
};
const initialStateClothing = {
  numberOfClothing: 10,
};

const foodReducer = (state = initialStateFood, action) => {
  switch (action.type) {
    case buy_food:
      return {
        ...state,
        numberOfFoods: state.numberOfFoods - 1,
      };
    default:
      return state;
  }
};
const clothReducer = (state = initialStateClothing, action) => {
  switch (action.type) {
    case buy_clothing:
      return {
        ...state,
        numberOfClothing: state.numberOfClothing - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  food: foodReducer,
  cloth: clothReducer,
});

const store = createStore(rootReducer);

const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(buyFood());
store.dispatch(buyFood());
store.dispatch(buyFood());
store.dispatch(buyFood());
store.dispatch(buyClothing());
console.log(store.getState());
