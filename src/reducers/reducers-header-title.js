import { ASSIGN_HEADER_TITLE } from '../actions/action-types'

export const header_title = (state = 'default', action) => {
  const { type, payload } = action;
  switch(type) {
    case ASSIGN_HEADER_TITLE:
      console.log('reducer running');
      return payload;
    default:
      return state;
  }
}
