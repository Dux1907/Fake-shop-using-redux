import {combineReducers, configureStore} from "@reduxjs/toolkit";
export const fetchAllProducts = () => async(dispatch) =>{
  const a = await fetch('https://fakestoreapi.com/products')
   const b = await a.json()
    dispatch({type: 'FETCH_PRODUCT',payload: b})
}
export const fetchProduct = (id) => async(dispatch) => {
  let a = await fetch(`https://fakestoreapi.com/products/${id}`);
  let b = await a.json();
  console.log(b)
  dispatch({type:'SELECTED_PRODUCTS',payload:b})
}
// export const setProduct = (product) => {
//   return {
//     type: "SET_PRODUCT",
//     payload: product,
//   };
// };

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
  // if (type == "SET_PRODUCT")
  //   //console.log('count')
  //   return { ...state, product: payload };
  if (type == 'FETCH_PRODUCT')
    return {...state,product:payload}
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

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore(
  {
    reducer: centralStore,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
  },
);

export default store;
