import {takeEvery, put} from 'redux-saga/effects'
import { SET_USER_DATA, USER_LIST } from './constants';
import UserList from '../UserList';

function* userList(){
    const url = "https://jwell-bliss-test-dev.cyclic.app/api/products/"
    let data = yield fetch(url);
    data = yield data.json();
    yield put({type:SET_USER_DATA,data})
    // console.log(`saga function called`,data);
}

function* SagaData(){
    yield takeEvery(USER_LIST,userList)
}
export default SagaData;