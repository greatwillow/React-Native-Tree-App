import { SET_SELECTED_PLANTER_ID } from '../actions/action-types';

export const selected_planter = (state = null, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_SELECTED_PLANTER_ID:
      return payload.id;
    default:
      return state;
  }
};
