import duckImage from '../images/duck.png'

const initialState = {
  duckRow: []
};

const ducks = (state = initialState, action) => {

  switch (action.type) {
    // handle add duck action
    case 'ADD_DUCK':
      const addList = state.duckRow.slice();
      addList.push(duckImage);
      return {
        ...state,
        duckRow: addList
      };
    // hand remove duck action
    case 'REMOVE_DUCK':
      const removeList = state.duckRow.slice();
      removeList.pop();
      return {
        ...state,
        duckRow: removeList
      };
    default:
      return state
  }
};

export default ducks