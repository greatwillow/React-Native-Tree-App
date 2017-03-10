import { SET_SELECTED_TALLY_DATE } from '../actions/action-types';
import moment from 'moment'

export const selected_tally_date = (state = null, action) => {
  const { type, payload } = action;
  switch(type) {
    case SET_SELECTED_TALLY_DATE:
      return Date.parse(payload.id);
    default:
      return state;
  }
}
