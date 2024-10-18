import { all, takeEvery, put, call } from "redux-saga/effects";
import actions from "./actions";
import { getProductsRequest } from "../../services/productsServices";

export function* getProductsSaga() {
  try {
    const response = yield call(getProductsRequest);
    if (response[0] === 200) {
      yield put({
        type: actions.GET_PRODUCTS_SUCCESS,
        products: response[1],
      });
    }
    if (response[0] === 500) {
    }
  } catch (error) {
    console.log(error);
  }
}

export default function* rootSaga() {
  yield all([yield takeEvery(actions.GET_PRODUCTS_REQUEST, getProductsSaga)]);
}
