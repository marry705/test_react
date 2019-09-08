import { takeEvery, call, put } from 'redux-saga/effects';
import data from '../date/data.json';

const getData = () => {
    return new Promise ( (res, rej) => {
        setTimeout(() => ( data && data.length === 5) ? res(data) : rej('No data'), 3000);
    });
};

function* workingAsync() {
  try {
    yield put({ type: 'REQUESTED' });
    const data = yield call( () => getData().then( (data) => data.join(' ')));
    yield put({ type: 'SUCCEEDED', data });
  } 
  catch (error) { yield put({ type: 'FAILED' }) };
} 

export function* watchServer() {
    yield takeEvery('SERVER_START', workingAsync);
}