const actions = {
  GET_PRODUCTS_REQUEST: "GET_PRODUCTS_REQUEST",
  GET_PRODUCTS_SUCCESS: "GET_PRODUCTS_SUCCESS",

  getProducts: () => {
    return (dispatch) => {
      dispatch({
        type: actions.GET_PRODUCTS_REQUEST,
      });
    };
  },
};
export default actions;
