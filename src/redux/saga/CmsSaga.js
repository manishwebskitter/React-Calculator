import { put, call, takeLatest, select } from 'redux-saga/effects';
import {
  allProductsSuccess,
  allProductsFailure
} from '../reducer/CmsReducer';
import { getApi, postApi } from '../../utiles/ApiRequest';


let getItem = state => state.AuthReducer;

export function* allProductsSaga(action) {

  let header = {
    Accept: 'application/json',
    contenttype: 'application/json',
  };

  try {
    let response = yield call(
      getApi,
      `products`,
      header
    );
    
    if (response?.status == 200) {
      yield put(allProductsSuccess(response?.data));
    } else {
      yield put(allProductsFailure(response?.data));
    }
  } catch (error) {
    yield put(allProductsFailure(error?.response));
    console.log("allProductsFailure", error?.response);
  }
}


const watchFunction = [
  (function* () {
    yield takeLatest('CMS/allProductsRequest', allProductsSaga);
  })(),
];

export default watchFunction;
