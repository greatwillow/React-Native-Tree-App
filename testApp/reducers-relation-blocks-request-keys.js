const RELATION_BLOCKS_RKEYS_INITIAL = {
  rel_blocks_rkeys_list: [],
}

export const relation_blocks_rkeys = (state = RELATION_BLOCKS_RKEYS_INITIAL, action) => {
  let idx = 0;
  switch(action.type) {
    case 'ADD_REQUEST_KEY_TO_BLOCK':
      idx = state.rel_blocks_rkeys_list.findIndex( r => ((r.block_id == action.payload.block_id) && (r.block_request_key_id == action.payload.block_request_key_id)))
      if(idx==-1) {
        return Object.assign({},state, {rel_blocks_rkeys_list: [...state.rel_blocks_rkeys_list, action.payload]})
      } else {
        return state;
      }
    case 'REMOVE_REQUEST_KEY_FROM_BLOCK':
      idx = state.rel_blocks_rkeys_list.findIndex( r => ((r.block_id == action.payload.block_id) && (r.block_request_key_id == action.payload.block_request_key_id)))
      if(idx==-1) {
          return state;
      } else {
          return Object.assign({}, state, {
              rel_blocks_rkeys_list: [
                  ...state.rel_blocks_rkeys_list.slice(0, idx),
                  ...state.rel_blocks_rkeys_list.slice(idx+1),
              ]
            });
      }
    default:
      return state
    }
}
