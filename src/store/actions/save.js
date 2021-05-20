import actionsTypes from "./actionsTypes";

export const save = (value) => {
  return {
    type: actionsTypes.SAVE,
    value: value,
  };
};
