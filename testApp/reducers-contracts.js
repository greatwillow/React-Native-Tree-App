import {
  ADD_CONTRACT,
  REMOVE_CONTRACT,
  UPDATE_CONTRACT,
} from '../actions/action-types'

const CONTRACTS_INITIAL = {
  contract_list: []
}

export const contracts = (state = CONTRACTS_INITIAL, action) => {
  let idx = 0;
  switch(action.type) {
    case ADD_CONTRACT:
      return Object.assign({}, state, {
        contract_list: [...state.contract_list, action.payload]
      })
    case REMOVE_CONTRACT:
        idx = state.contract_list.findIndex( r => r.contract_id == action.payload.contract_id)
        if(idx==-1) {
                return state
            } else {
                return Object.assign({}, state, {
                    contract_list: [
                        ...state.contract_list.slice(0, idx),
                        ...state.contract_list.slice(idx+1),
                    ]
                  });
            }
    case UPDATE_CONTRACT:
        idx = state.contract_list.findIndex( r => r.contract_id == action.payload.contract_id)
        if(idx==-1) {
          return state
        } else {
          return Object.assign({}, state, {
            contract_list: [
              ...state.contract_list.slice(0, idx),
              action.payload,
              ...state.contract_list.slice(idx+1),
            ]
          });
        }
    default:
      return state

  }
}
