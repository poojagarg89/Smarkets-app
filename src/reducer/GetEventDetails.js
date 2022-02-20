import * as types from '../action/actionTypes';

const initialState = {
  isFetching: true,
  eventDetails: [],
};

export default function getEventDetails(state = initialState, action) {
  switch (action.type) {
    case types.GET_EVENT_DETAILS_REQUEST:
      return { ...state, isFetching: true };

    case types.GET_EVENT_DETAILS_SUCCESS:
      return { isFetching: false, eventDetails: action.eventDetails };

    case types.GET_EVENT_DETAILS_ERROR:
      return { ...state, isFetching: false, error: action.message };

    default:
      return state;
  }
}
