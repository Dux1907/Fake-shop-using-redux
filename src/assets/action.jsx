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
export const removeProduct = (product) => {
  return {
    type: "REMOVE_PRODUCT",
  };
};
const initialState = {
  product: [
    // {
    //   id: 21,
    //   image:'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80',
    //   title:'Photographer',
    //   description:'A women clicking a photograph.',
    //   price: 350,
    //   rating:3.5
    //} }
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
