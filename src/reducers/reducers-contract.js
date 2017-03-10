
import { SET_SELECTED_CONTRACT_ID } from '../actions/action-types'

export const selected_contract = (state = null, action) => {
  const { type, payload } = action;
  switch(type) {
    case SET_SELECTED_CONTRACT_ID:
      return payload.id;
    default:
      return state;
  }
}
