import { SET_SELECTED_BLOCK_ID } from '../actions/action-types';

export const selected_block = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_BLOCK_ID:
      return payload.id;
    default:
      return state;
  }
};
