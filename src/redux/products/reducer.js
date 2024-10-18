import actions from "./actions";

const initState = {
  products: [],
};

export default function ProductsReducer(
  state = initState,
  { type, ...action }
) {
  switch (type) {
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.products,
      };

    default:
      return state;
  }
}
