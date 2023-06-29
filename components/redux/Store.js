import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './rootReducer'
import createSagaMiddleware from 'redux-saga'
import SagaData from './Saga';
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run(SagaData)
export default store;