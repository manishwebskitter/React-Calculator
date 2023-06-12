import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import CmsReducer from './reducer/CmsReducer';
import RootSaga from './saga/RootSaga';

let SagaMiddleware = createSagaMiddleware();
const middleware = [SagaMiddleware, logger];
export default configureStore({
  reducer: {
    CmsReducer: CmsReducer,
  },
  middleware,
});
SagaMiddleware.run(RootSaga);
