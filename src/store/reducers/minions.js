import actionsTypes from "../actions/actionsTypes";

const initialState = {
  minions: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.CREATE_MINION:
      return {
        minions: state.minions + 1,
      };
    case actionsTypes.DESTROY_MINION:
      return {
        minions: state.minions - 1,
      };
    case actionsTypes.CREATE_TEAM:
      return {
        minions: state.minions + action.value,
      };
    case actionsTypes.DESTROY_TEAM:
      return {
        minions: state.minions - action.value,
      };
    case actionsTypes.AUTO_ENROLL:
      return {
        minions: state.minions + action.value,
      };
    default:
      return state;
  }
};

export default reducer;
