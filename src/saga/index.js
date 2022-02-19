import { fork } from 'redux-saga/effects';
import getEventListSaga from './GetEventListSaga';

function* sagas() {
  yield fork(getEventListSaga);
}

export default sagas;
