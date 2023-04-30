import { combineReducers, configureStore } from "@reduxjs/toolkit";

export const setProduct = (product) => {
  return {
    type: "SET_PRODUCT",
    payload: product,
  };
};

export const selectedProducts = (product) => {
  return {
    type: "SELECTED_PRODUCTS",
    payload: product,
  };
};
export const removeProduct = () => {
  return {
    type: "REMOVE_PRODUCT",
  };
};
const initialState = {
  product: [
  ],
};

const allProducts = (state = initialState, { type, payload }) => {
  if (type == "SET_PRODUCT")
    //console.log('count')
    return { ...state, product: payload };
  else return state;
};
const allSelectedProducts = (state = {}, { type, payload }) => {
  if (type == "SELECTED_PRODUCTS") return { ...payload };
  else if (type == "REMOVE_PRODUCT") return {};
  else return state;
};

const centralStore = combineReducers({
  allProducts: allProducts,
  allSelectedProducts: allSelectedProducts,
});

const store = configureStore(
  { reducer: centralStore },
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
