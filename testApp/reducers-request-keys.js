import {
  ADD_REQUEST_KEY,
  REMOVE_REQUEST_KEY,
  UPDATE_REQUEST_KEY,
} from '../actions/action-types'


const REQUEST_KEYS_INITIAL = {
  request_key_list: [],
  request_key_name: '',
  request_key_id: '',
  request_key_trees_per_box: 0,
  request_key_trees_per_bundle: 0
}

export const request_keys = (state = REQUEST_KEYS_INITIAL, action) => {
  let idx = 0;
  switch(action.type) {
    case 'ADD_REQUEST_KEY_TO_LIST':
      return Object.assign({},state, {
          request_key_list: [...state.request_key_list, action.payload]
        })
    case 'REMOVE_REQUEST_KEY_FROM_LIST':
        idx = state.request_key_list.findIndex( r => r.request_key_id == action.payload.request_key_id)
        if(idx==-1) {
                return state
            } else {
                return Object.assign({}, state, {
                    request_key_list: [
                        ...state.request_key_list.slice(0, idx),
                        ...state.request_key_list.slice(idx+1),
                    ]
                  });
            }
    case 'UPDATE_REQUEST_KEY_IN_LIST':
        idx = state.request_key_list.findIndex( r => r.request_key_id == action.payload.request_key_id)
        if(idx==-1) {
          return state
        } else {
          return Object.assign({}, state, {
            request_key_list: [
              ...state.request_key_list.slice(0, idx),
              action.payload,
              ...state.request_key_list.slice(idx+1),
            ]
          });
        }
    default:
      return state
      }
}
