
'use strict'

import {
  ASSIGN_HEADER_TITLE,
  //PLANTER
  ADD_PLANTER,
  REMOVE_PLANTER,
  UPDATE_PLANTER,
  //REQUEST KEY
  ADD_REQUEST_KEY,
  REMOVE_REQUEST_KEY,
  UPDATE_REQUEST_KEY,
  //BLOCK
  ADD_BLOCK,
  REMOVE_BLOCK,
  UPDATE_BLOCK,
  //CONTRACT
  ADD_CONTRACT,
  REMOVE_CONTRACT,
  UPDATE_CONTRACT,
  //DATE
  ADD_TALLY_DATE,
  //SET SELECTED
  SET_SELECTED_PLANTER_ID,
  SET_SELECTED_CONTRACT_ID,
  SET_SELECTED_BLOCK_ID,
  SET_SELECTED_REQUEST_KEY_ID,
  SET_SELECTED_TALLY_DATE,
  //BLOCK RELATIONS
  ADD_REQUEST_KEY_TO_BLOCK,
  REMOVE_REQUEST_KEY_FROM_BLOCK,
  //CONTRACT RELATIONS
  ADD_BLOCK_TO_CONTRACT,
  REMOVE_BLOCK_FROM_CONTRACT,
  //DATE RELATIONS
  ADD_PLANTER_TO_TALLY_DATE,
  REMOVE_PLANTER_FROM_TALLY_DATE,
  ADD_REQUEST_KEY_TO_TALLY_DATE,
  REMOVE_REQUEST_KEY_FROM_TALLY_DATE,
  ADD_BLOCK_TO_TALLY_DATE,
  REMOVE_BLOCK_FROM_TALLY_DATE,
  ADD_CONTRACT_TO_TALLY_DATE,
  REMOVE_CONTRACT_FROM_TALLY_DATE,
} from './action-types'



export const assignHeaderTitle = (payload) => {
  return {
    type: ASSIGN_HEADER_TITLE,
    payload
  }
}

//PLANTER
export const addPlanter = (payload) => {
  return {
    type: ADD_PLANTER,
    payload
  }
}

export const removePlanter = (payload) => {
  return {
    type: REMOVE_PLANTER,
    payload
  }
}

export const updatePlanter = (payload) => {
  return {
    type: UPDATE_PLANTER,
    payload
  }
}


//REQUEST KEY
export const addRequestKey = (payload) => {
  return {
    type: ADD_REQUEST_KEY,
    payload
  }
}

export const removeRequestKey = (payload) => {
  return {
    type: REMOVE_REQUEST_KEY,
    payload
  }
}

export const updateRequestKey = (payload) => {
  return {
    type: UPDATE_REQUEST_KEY,
    payload
  }
}


//BLOCK
export const addBlock = (payload) => {
  return {
    type: ADD_BLOCK,
    payload
  }
}

export const removeBlock = (payload) => {
  return {
    type: REMOVE_BLOCK,
    payload
  }
}

export const updateBlock = (payload) => {
  return {
    type: UPDATE_BLOCK,
    payload
  }
}


//CONTRACT
export const addContract = (payload) => {
  return {
    type: ADD_CONTRACT,
    payload
  }
}

export const removeContract = (payload) => {
  return {
    type: REMOVE_CONTRACT,
    payload
  }
}

export const updateContract = (payload) => {
  return {
    type: UPDATE_CONTRACT,
    payload
  }
}


//Date
export const addTallyDate = (payload) => {
  return {
    type: ADD_TALLY_DATE,
    payload
  }
}


//SET SELECTED
export const setSelectedPlanterId = (payload) => {
  return {
    type: SET_SELECTED_PLANTER_ID,
    payload
  }
}

export const setSelectedContractId = (payload) => {
  return {
    type: SET_SELECTED_CONTRACT_ID,
    payload
  }
}
export const setSelectedBlockId = (payload) => {
  return {
    type: SET_SELECTED_BLOCK_ID,
    payload
  }
}

export const setSelectedRequestKeyId = (payload) => {
  return {
    type: SET_SELECTED_REQUEST_KEY_ID,
    payload
  }
}

export const setSelectedTallyDate = (payload) => {
  return {
    type: SET_SELECTED_TALLY_DATE,
    payload
  }
}






//BLOCK RELATIONS
export const addRequestKeyToBlock = (payload) => {
  return {
    type: ADD_REQUEST_KEY_TO_BLOCK,
    payload
  }
}

export const removeRequestKeyFromBlock = (payload) => {
  return {
    type: REMOVE_REQUEST_KEY_FROM_BLOCK,
    payload
  }
}


//CONTRACT RELATIONS
export const addBlockToContract = (payload) => {
  return {
    type: ADD_BLOCK_TO_CONTRACT,
    payload
  }
}

export const removeBlockFromContract = (payload) => {
  return {
    type: REMOVE_BLOCK_FROM_CONTRACT,
    payload
  }
}


//DATE RELATIONS
export const addPlanterToTallyDate = (payload) => {
  return {
    type: ADD_PLANTER_TO_TALLY_DATE,
    payload
  }
}

export const removePlanterFromTallyDate = (payload) => {
  return {
    type: REMOVE_PLANTER_FROM_TALLY_DATE,
    payload
  }
}
export const addRequestKeyToTallyDate = (payload) => {
  return {
    type: ADD_REQUEST_KEY_TO_TALLY_DATE,
    payload
  }
}

export const removeRequestKeyFromTallyDate = (payload) => {
  return {
    type: REMOVE_REQUEST_KEY_FROM_TALLY_DATE,
    payload
  }
}
export const addBlockToTallyDate = (payload) => {
  return {
    type: ADD_BLOCK_TO_TALLY_DATE,
    payload
  }
}

export const removeBlockFromTallyDate = (payload) => {
  return {
    type: REMOVE_BLOCK_FROM_TALLY_DATE,
    payload
  }
}
export const addContractToTallyDate = (payload) => {
  return {
    type: ADD_CONTRACT_TO_TALLY_DATE,
    payload
  }
}

export const removeContractFromTallyDate = (payload) => {
  return {
    type: REMOVE_CONTRACT_FROM_TALLY_DATE,
    payload
  }
}
