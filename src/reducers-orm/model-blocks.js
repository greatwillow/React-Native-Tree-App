import { fk, many, Model, ORM } from 'redux-orm'

import {
  //Planter
  ADD_PLANTER,
  REMOVE_PLANTER,
  UPDATE_PLANTER,
  //Request KEY
  ADD_REQUEST_KEY,
  REMOVE_REQUEST_KEY,
  UPDATE_REQUEST_KEY,
  //Block
  ADD_BLOCK,
  REMOVE_BLOCK,
  UPDATE_BLOCK,
  //Contract
  ADD_CONTRACT,
  REMOVE_CONTRACT,
  UPDATE_CONTRACT,
  //Date
  ADD_TALLY_DATE,
  //Planter Relations

  //Request Key Relations

  //Block Relations
  ADD_REQUEST_KEY_TO_BLOCK,
  REMOVE_REQUEST_KEY_FROM_BLOCK,
  //Contract Relations
  ADD_BLOCK_TO_CONTRACT,
  REMOVE_BLOCK_FROM_CONTRACT,
  //Date Relations
  ADD_PLANTER_TO_TALLY_DATE,
  REMOVE_PLANTER_FROM_TALLY_DATE,
  ADD_REQUEST_KEY_TO_TALLY_DATE,
  REMOVE_REQUEST_KEY_FROM_TALLY_DATE,
  ADD_BLOCK_TO_TALLY_DATE,
  REMOVE_BLOCK_FROM_TALLY_DATE,
  ADD_CONTRACT_TO_TALLY_DATE,
  REMOVE_CONTRACT_FROM_TALLY_DATE,

} from '../actions/action-types'

//-----------------PLANTER-------------
export class Planter extends Model {
  static reducer(action, Planter) {
    const { type, payload } = action;
    switch(type) {
      case ADD_PLANTER:
          const props = Object.assign({}, payload)
          Planter.create(props);
          break;
      case REMOVE_PLANTER:
          Planter.withId(payload.id).delete();
          break;
      case UPDATE_PLANTER:
            Planter.withId(payload.id).update(payload);
            break;
    }
  }
}
Planter.modelName = 'Planter';
Planter.fields = {}

//-----------------REQUEST KEY-------------
export class Request_Key extends Model {
  static reducer(action, Request_Key) {
    const { type, payload } = action;
    switch(type) {
      case ADD_REQUEST_KEY:
          const props = Object.assign({}, payload)
          Request_Key.create(props);
          break;
      case REMOVE_REQUEST_KEY:
          Request_Key.withId(payload.id).delete();
          break;
      case UPDATE_REQUEST_KEY:
            Request_Key.withId(payload.id).update(payload);
            break;
    }
  }
}
Request_Key.modelName = 'Request_Key';
Request_Key.fields = {}

//-----------------BLOCK-------------
export class Block extends Model {
  static reducer(action, Block) {
    const { type, payload } = action;
    switch(type) {
      case ADD_BLOCK:
          const props = Object.assign({}, payload);
          Block.create(props);
          break;
      case REMOVE_BLOCK:
          Block.withId(payload.id).delete();
          break;
      case UPDATE_BLOCK:
            Block.withId(payload.id).update(payload);
            break;
    }
  }
}
Block.modelName = 'Block';
Block.fields = {
  request_keys: many({
    to: 'Request_Key',
    relatedName: 'blocks',
    through: 'B__RK',
    throughFields: ['block', 'request_key']
  }),
}

//-----------------CONTRACT-------------
export class Contract extends Model {
  static reducer(action, Contract) {
    const { type, payload } = action;
    switch(type) {
      case ADD_CONTRACT:
            const props = Object.assign({}, payload)
            Contract.create(props);
            break;
      case REMOVE_CONTRACT:
            Contract.withId(payload.id).delete();
            break;
      case UPDATE_CONTRACT:
            Contract.withId(payload.id).update(payload);
            break;
    }
  }
}
Contract.modelName = 'Contract';
Contract.fields = {
  blocks: many({
    to: 'Block',
    relatedName: 'contracts',
    through: 'C__B',
    throughFields: ['contract', 'block']
  }),
}

//-----------------Tally Date-------------
export class Tally_Date extends Model {
  static reducer(action, Tally_Date) {
    const { type, payload } = action;
    switch(type) {
      case ADD_TALLY_DATE:
        if(!Tally_Date.filter({id: payload}).exists()) {
          Tally_Date.create({ id: Date.parse(payload.id)});
        }
        break;
    }
  }
}
Tally_Date.modelName = 'Tally_Date';
Tally_Date.fields = {
  planters: many({
    to: 'Planter',
    relatedName: 'tally_dates',
    through: 'TD__P',
    throughFields: ['tally_date', 'planter'],
  }),
  contracts: many({
    to: 'Contract',
    relatedName: 'tally_dates',
    through: 'TD__C',
    throughFields: ['tally_date', 'contract'],
  }),
  blocks: many({
    to: 'Block',
    relatedName: 'tally_dates',
    through: 'TD__B',
    throughFields: ['tally_date', 'block'],
  }),
  request_keys: many({
    to: 'Request_Key',
    relatedName: 'tally_dates',
    through: 'TD__RK',
    throughFields: ['tally_date', 'request_key'],
  }),
}




//-----------------Relation PLANTER-------------

class P__C extends Model {}
P__C.modelName = 'P__C';
P__C.fields = {
  planter: fk('Planter', 'p__cs'),
  contract: fk('Contract', 'p__cs'),
}
class P__B extends Model {}
P__B.modelName = 'P__B';
P__B.fields = {
  planter: fk('Planter', 'p__bs'),
  block: fk('Block', 'p__bs'),
}
class P__RK extends Model {}
P__RK.modelName = 'P__RK';
P__RK.fields = {
  planter: fk('Planter', 'p__rks'),
  request_key: fk('Request_Key', 'p__rks'),
}



//-----------------Relation REQUEST KEY-------------



//-----------------Relation BLOCK-------------
class B__RK extends Model {
  static reducer(action, B__RK) {
    const { type, payload } = action;
    switch(type) {
      case ADD_REQUEST_KEY_TO_BLOCK:
        B__RK.create({id: (new Date).getTime(), request_key: payload.listed_element_id, block: payload.related_element_id});
        break;
      case REMOVE_REQUEST_KEY_FROM_BLOCK:
        B__RK.all().filter({block: payload.related_element_id}).filter({request_key: payload.listed_element_id}).delete();
        break;
    }
  }
}

B__RK.modelName = 'B__RK';
B__RK.fields = {
  block: fk('Block', 'rk__bs'),
  request_key: fk('Request_Key', 'rk__bs'),
}

//-----------------Relation CONTRACT-------------
class C__B extends Model {
  static reducer(action, C__B) {
    const { type, payload } = action;
    switch(type) {
      case ADD_BLOCK_TO_CONTRACT:
        C__B.create({id: (new Date).getTime(), block: payload.listed_element_id, contract: payload.related_element_id});
        break;
      case REMOVE_BLOCK_FROM_CONTRACT:
        C__B.all().filter({contract: payload.related_element_id}).filter({block: payload.listed_element_id}).delete();
        break;
    }
  }
}


C__B.modelName = 'C__B';
C__B.fields = {
  block: fk('Block', 'c__bs'),
  contract: fk('Contract', 'c__bs'),
}
//-----------------Relation Tally Date-------------
class TD__P extends Model {
  static reducer(action, TD__P) {
    const { type, payload } = action;
    switch(type) {
      case ADD_PLANTER_TO_TALLY_DATE:
        TD__P.create({id: (new Date).getTime(), planter: payload.listed_element_id, tally_date: payload.related_element_id});
        break;
      case REMOVE_PLANTER_FROM_TALLY_DATE:
        TD__P.all().filter({tally_date: payload.related_element_id}).filter({planter: payload.listed_element_id}).delete();
        break;
    }
  }
}
TD__P.modelName = 'TD__P';
TD__P.fields = {
  tally_date: fk('Tally_Date', 'td__ps'),
  planter: fk('Planter', 'td__ps'),
}

class TD__C extends Model {
  static reducer(action, TD__C) {
    const { type, payload } = action;
    switch(type) {
      case ADD_CONTRACT_TO_TALLY_DATE:
        TD__C.create({id: (new Date).getTime(), contract: payload.listed_element_id, tally_date: payload.related_element_id});
        break;
      case REMOVE_CONTRACT_FROM_TALLY_DATE:
        TD__C.all().filter({tally_date: payload.related_element_id}).filter({contract: payload.listed_element_id}).delete();
        break;
    }
  }
}
TD__C.modelName = 'TD__C';
TD__C.fields = {
  tally_date: fk('Tally_Date', 'td__cs'),
  contract: fk('Contract', 'td__cs'),
}

class TD__B extends Model {
  static reducer(action, TD__B) {
    const { type, payload } = action;
    switch(type) {
      case ADD_BLOCK_TO_TALLY_DATE:
        TD__B.create({id: (new Date).getTime(), block: payload.listed_element_id, tally_date: payload.related_element_id});
        break;
      case REMOVE_BLOCK_FROM_TALLY_DATE:
        TD__B.all().filter({tally_date: payload.related_element_id}).filter({block: payload.listed_element_id}).delete();
        break;
    }
  }
}
TD__B.modelName = 'TD__B';
TD__B.fields = {
  tally_date: fk('Tally_Date', 'td__bs'),
  block: fk('Block', 'td__bs'),
}

class TD__RK extends Model {
  static reducer(action, TD__RK) {
    const { type, payload } = action;
    switch(type) {
      case ADD_REQUEST_KEY_TO_TALLY_DATE:
        TD__RK.create({id: (new Date).getTime(), request_key: payload.listed_element_id, tally_date: payload.related_element_id});
        break;
      case REMOVE_REQUEST_KEY_FROM_TALLY_DATE:
        TD__RK.all().filter({tally_date: payload.related_element_id}).filter({request_key: payload.listed_element_id}).delete();
        break;
    }
  }
}
TD__RK.modelName = 'TD__RK';
TD__RK.fields = {
  tally_date: fk('Tally_Date', 'td__rks'),
  request_key: fk('Request_Key', 'td__rks'),
}

export const orm = new ORM();
orm.register(
  C__B,
  TD__P,
  TD__C,
  TD__B,
  TD__RK,
  P__C,
  P__B,
  P__RK,
  B__RK,
  Tally_Date,
  Contract,
  Block,
  Request_Key,
  Planter,
);
export default orm;
