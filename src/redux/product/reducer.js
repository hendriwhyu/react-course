import { ADD_PRODUCT } from "./action";

const initialState = {
  products: [],
};

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.product],
      };
    default:
      return state;
  }
}