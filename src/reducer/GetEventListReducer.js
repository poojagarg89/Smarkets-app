import * as types from '../action/actionTypes';

const initialState = {
  isFetching: false,
  eventListIds: [],
};

export default function getEventListIds(state = initialState, action) {
  switch (action.type) {
    case types.GET_EVENT_ID_REQUEST:
      return { ...state, isFetching: true };

    case types.GET_EVENT_ID_SUCCESS:
      return { isFetching: false, eventListIds: action.eventListIds };

    case types.GET_EVENT_ID_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
