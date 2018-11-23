import { takeEvery } from 'redux-saga';
import { fork, call, put } from 'redux-saga/effects';
import axios from 'axios';

const urlAll = '/all';
const urlTop = '/top';


function getResponse(url) {
    return axios.get(url).then((response) => {return response.data;});
}

const showError  = (status) =>
{
    switch(status) {
        case 404: return 'Not Found';
        default:
          return {};
      }
}

function* callSaga(type, url, dispatch) {
  try {
    const result = yield call(getResponse,url);
    yield put({type: type.concat("_SUCCESS"), payload:result});
  } catch (err) {
    yield put({type: type.concat("_ERROR"), payload:showError(err.response.status)});
  }
}

function* getUserSaga(dispatch) {
  yield* takeEvery("FETCH_USERS", callSaga,"FETCH_USERS", urlAll);
}

function* getTopSaga() {
  yield* takeEvery("FETCH_TOP", callSaga,"FETCH_TOP", urlTop);
}

export default function* root() {
  yield [
    fork(getUserSaga),fork(getTopSaga)
  ]
}
