import aDuck from '../images/duck.png'

const initialState = {
  duckRow: []
};

const ducks = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_DUCK':
      const addList = state.duckRow.slice();
      addList.push(aDuck);
      return {
        ...state,
        duckRow: addList
      };
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