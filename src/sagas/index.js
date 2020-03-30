import { put, takeLatest, all,call } from 'redux-saga/effects';
import api from '../api'

function* addUser(data) {
const response = yield call(api.add_user,data.payload);

yield put({type: 'USER_ADDED',data: {data: response.data,id:data.payload.id}})
}

function* getUsers() {
    const response = yield call(api.get_users);
    yield put({type: 'RECIEVED_USERS',data: response.data})  
}

function* deleteUser(data) {
   
    const response = yield call(api.delete_user,data.payload);
    yield put({type: 'USER_DELETED',id: data.payload})
}

function* userWatcher() {
    yield takeLatest('ADD_USER',addUser)
    yield takeLatest('USER_LIST',getUsers)
    yield takeLatest('DELETE_USER',deleteUser)
    
}

export default function* rootSaga() {
    yield all([userWatcher()])
}