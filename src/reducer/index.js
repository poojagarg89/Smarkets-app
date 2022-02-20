import { combineReducers } from 'redux';

import getEventListIds from './GetEventListReducer';
import getEventDetails from './GetEventDetails';

export default combineReducers({
  getEventListIds,
  getEventDetails,
});
