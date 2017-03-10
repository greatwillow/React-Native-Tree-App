import {
  ADD_PLANTER,
  REMOVE_PLANTER,
  UPDATE_PLANTER,
} from '../actions/action-types'

const PLANTERS_INITIAL = {
  planter_list: [],
}

export const planters = (state = PLANTERS_INITIAL, action) => {
  let idx = 0;
  switch(action.type) {
    case ADD_PLANTER:
      return Object.assign({},state, {
          planter_list: [...state.planter_list, action.payload]
        })
    case REMOVE_PLANTER:
        idx = state.planter_list.findIndex( r => r.planter_id == action.payload.planter_id)
        if(idx==-1) {
                return state
            } else {
                return Object.assign({}, state, {
                    planter_list: [
                        ...state.planter_list.slice(0, idx),
                        ...state.planter_list.slice(idx+1),
                    ]
                  });
            }
    case UPDATE_PLANTER:
        idx = state.planter_list.findIndex( r => r.planter_id == action.payload.planter_id)
        if(idx==-1) {
          return state
        } else {
          return Object.assign({}, state, {
            planter_list: [
              ...state.planter_list.slice(0, idx),
              action.payload,
              ...state.planter_list.slice(idx+1),
            ]
          });
        }
    default:
      return state
      }
}
