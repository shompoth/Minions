import actionsTypes from "./actionsTypes";

export const createMinion = () => {
  return { type: actionsTypes.CREATE_MINION };
};
export const destroyMinion = () => {
  return { type: actionsTypes.DESTROY_MINION };
};

export const createTeam = (value) => {
  return {
    type: actionsTypes.CREATE_TEAM,
    value: value,
  };
};

export const destroyTeam = (value) => {
  return {
    type: actionsTypes.DESTROY_TEAM,
    value: value,
  };
};

const autoEnrollAsync = (minions) => {
  return {
    type: actionsTypes.AUTO_ENROLL,
    value: minions + 1,
  };
};

export const autoEnroll = (minions) => {
  return (dispatch) => {
    setInterval(() => {
      dispatch(autoEnrollAsync(minions));
    }, 4000);
  };
};
