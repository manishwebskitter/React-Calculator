import {all} from 'redux-saga/effects';
import CmsSaga from './CmsSaga';

const combinedSaga = [
  ...CmsSaga  
];

export default function* RootSaga() {
  yield all(combinedSaga);
}
