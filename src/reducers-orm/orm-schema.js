import { ORM } from 'redux-orm';

import {C__B} from './model-blocks';
import {TD__P} from './model-blocks';
import {TD__C} from './model-blocks';
import {TD__B} from './model-blocks';
import {TD__RK} from './model-blocks';
import {P__C} from './model-blocks';
import {P__B} from './model-blocks';
import {P__RK} from './model-blocks';
import {B__RK} from './model-blocks';
import {Tally_Date} from './model-blocks';
import {Contract} from './model-blocks';
import {Block} from './model-blocks';
import {Request_Key} from './model-blocks';
import {Planter} from './model-blocks';


const orm = new ORM();
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
