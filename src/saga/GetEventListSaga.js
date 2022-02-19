import { takeLatest, call, put } from 'redux-saga/effects';

import * as types from '../action/actionTypes';
import { getEventIds, getAllEventDetailsByIds } from '../api/api';

function* getEventDetailsList(eventIds) {
  try {
    const eventListDetails = yield call(getAllEventDetailsByIds, eventIds);
    yield put({
      type: types.GET_EVENT_DETAILS_SUCCESS,
      eventDetails: eventListDetails?.data,
    });
  } catch (e) {
    yield put({ type: types.GET_EVENT_DETAILS_ERROR, message: e.message });
  }
}

function* getEventListIds() {
  try {
    const eventListIds = yield call(getEventIds);
    const eventIdsList = eventListIds?.data?.popular_event_ids;
    yield put({
      type: types.GET_EVENT_ID_SUCCESS,
      eventListIds: eventListIds?.data,
    });
    if (eventIdsList && eventIdsList.length > 0) {
      yield call(getEventDetailsList, eventIdsList);
    }
  } catch (e) {
    yield put({ type: types.GET_EVENT_ID_ERROR, message: e.message });
  }
}

function* getEventListSaga() {
  yield takeLatest(types.GET_EVENT_ID_REQUEST, getEventListIds);
}

export default getEventListSaga;
