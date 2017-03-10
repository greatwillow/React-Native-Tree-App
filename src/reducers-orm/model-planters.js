import { fk, many, Model } from 'redux-orm'

import {
  ADD_PLANTER,
  REMOVE_PLANTER,
  UPDATE_PLANTER,
} from '../actions/action-types'

export class Planter extends Model {
  static reducer(state, action, Planter, session) {
    const { type, payload } = action;
    switch(type) {
      case ADD_PLANTER:
          const props = Object.assign({}, payload)
          Planter.create(props);
          break;
      case REMOVE_PLANTER:
          Planter.withId(payload.id).delete();
          break;
    }
  }
}

Planter.modelName = 'Planter';

Planter.fields = {
  blocks: many('Block', 'planters'),
  //request_keys: many('Request_Key', 'planters'),
  //contract: many('Contract', 'planters'),
}
