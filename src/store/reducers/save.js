import actionsTypes from "../actions/actionsTypes";

const initialState = {
  history: []
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actionsTypes.SAVE: 
      return {
        history: state.history.concat({
          id: new Date(),
          value: action.value,
        })
      }
    default: 
      return state
  }
}

export default reducer