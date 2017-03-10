
import { SET_SELECTED_REQUEST_KEY_ID } from '../actions/action-types'

export const selected_request_key = (state = null, action) => {
  const { type, payload } = action;
  switch(type) {
    case SET_SELECTED_REQUEST_KEY_ID:
      return payload.id;
    default:
      return state;
  }
}
