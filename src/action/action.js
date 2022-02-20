import * as types from './actionTypes';

export function getEventIdsAction() {
  return {
    type: types.GET_EVENT_ID_REQUEST,
  };
}

export function getEventDetails(eventIds) {
  return {
    type: types.GET_EVENT_DETAILS_REQUEST,
    eventIds,
  };
}
