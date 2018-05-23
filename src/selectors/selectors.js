import { orm } from '../reducers-orm/model-blocks';
import { createSelector } from 'reselect';

export const ormSelector = state => state.orm;

export const plantersAll = createSelector(
  ormSelector,
  orm.createSelector(orm => {
    return orm.Planter.all().toRefArray();
  })
);

export const plantersSelectedInstance = createSelector(
  ormSelector,
  state => state.selected_planter,
  orm.createSelector((orm, selectedPlanterId) => {
    if (
      selectedPlanterId !== null &&
      selectedPlanterId !== undefined &&
      selectedPlanterId !== 0
    ) {
      return orm.Planter.withId(selectedPlanterId).ref;
    } else {
      return;
    }
  })
);

export const blocksAll = createSelector(
  ormSelector,
  orm.createSelector(orm => {
    return orm.Block.all().toRefArray();
  })
);

export const blocksSelectedInstance = createSelector(
  ormSelector,
  state => state.selected_block,
  orm.createSelector((orm, selectedBlockId) => {
    if (
      selectedBlockId !== null &&
      selectedBlockId !== undefined &&
      selectedBlockId !== 0
    ) {
      return orm.Block.withId(selectedBlockId).ref;
    } else {
      return;
    }
  })
);

export const contractsAll = createSelector(
  ormSelector,
  orm.createSelector(orm => {
    return orm.Contract.all().toRefArray();
  })
);

export const contractsSelectedInstance = createSelector(
  ormSelector,
  state => state.selected_contract,
  orm.createSelector((orm, selectedContractId) => {
    if (
      selectedContractId !== null &&
      selectedContractId !== undefined &&
      selectedContractId !== 0
    ) {
      return orm.Contract.withId(selectedContractId).ref;
    } else {
      return;
    }
  })
);

export const requestKeysAll = createSelector(
  ormSelector,
  orm.createSelector(orm => {
    return orm.Request_Key.all().toRefArray();
  })
);

export const requestKeysSelectedInstance = createSelector(
  ormSelector,
  state => state.selected_request_key,
  orm.createSelector((orm, selectedRequestKeyId) => {
    if (
      selectedRequestKeyId !== null &&
      selectedRequestKeyId !== undefined &&
      selectedRequestKeyId !== 0
    ) {
      return orm.Request_Key.withId(selectedRequestKeyId).ref;
    } else {
      return;
    }
  })
);

export const requestKeysOfBlockSelector = createSelector(
  ormSelector,
  state => state.selected_block,
  orm.createSelector((orm, selectedBlockId) => {
    if (
      selectedBlockId !== null &&
      selectedBlockId !== undefined &&
      selectedBlockId !== 0
    ) {
      return orm.Block.withId(selectedBlockId).request_keys.toModelArray(request_key => {
        const obj = Object.assign({}, request_key.ref);
        return obj;
      });
    }
    return;
  })
);

export const blocksOfContractSelector = createSelector(
  ormSelector,
  state => state.selected_contract,
  orm.createSelector((orm, selectedContractId) => {
    if (
      selectedContractId !== null &&
      selectedContractId !== undefined &&
      selectedContractId !== 0
    ) {
      return orm.Contract.withId(selectedContractId).blocks.toModelArray(block => {
        const obj = Object.assign({}, block.ref);
        return obj;
      });
    }
    return;
  })
);

//DATE RELATIONS
export const plantersOfDateSelector = createSelector(
  ormSelector,
  state => state.selected_tally_date,
  orm.createSelector((orm, selectedTallyDateId) => {
    if (
      selectedTallyDateId !== null &&
      selectedTallyDateId !== undefined &&
      selectedTallyDateId !== 0
    ) {
      return orm.Tally_Date.withId(selectedTallyDateId).planters.toModelArray(planter => {
        const obj = Object.assign({}, planter.ref);
        return obj;
      });
    }
    return;
  })
);

export const requestKeysOfDateSelector = createSelector(
  ormSelector,
  state => state.selected_tally_date,
  orm.createSelector((orm, selectedTallyDateId) => {
    if (
      selectedTallyDateId !== null &&
      selectedTallyDateId !== undefined &&
      selectedTallyDateId !== 0
    ) {
      return orm.Tally_Date.withId(selectedTallyDateId).request_keys.toModelArray(
        request_key => {
          const obj = Object.assign({}, request_key.ref);
          return obj;
        }
      );
    }
    return;
  })
);

export const blocksOfDateSelector = createSelector(
  ormSelector,
  state => state.selected_tally_date,
  orm.createSelector((orm, selectedTallyDateId) => {
    if (
      selectedTallyDateId !== null &&
      selectedTallyDateId !== undefined &&
      selectedTallyDateId !== 0
    ) {
      return orm.Tally_Date.withId(selectedTallyDateId).blocks.toModelArray(block => {
        const obj = Object.assign({}, block.ref);
        return obj;
      });
    }
    return;
  })
);

//_-------------------TESTING-----------

export const contractsOfDateSelector = createSelector(
  ormSelector,
  state => state.selected_tally_date,
  orm.createSelector((orm, selectedTallyDateId) => {
    if (
      selectedTallyDateId !== null &&
      selectedTallyDateId !== undefined &&
      selectedTallyDateId !== 0
    ) {
      return orm.Tally_Date.withId(selectedTallyDateId).contracts.toModelArray(
        contract => {
          const obj = Object.assign({}, contract.ref);
          return obj;
        }
      );
    }
    return;
  })
);

export const blocksAvailableForDateSelector = createSelector(
  ormSelector,
  state => state.selected_tally_date,
  orm.createSelector((orm, selectedTallyDateId) => {})
);
