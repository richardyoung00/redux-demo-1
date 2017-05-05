import aDuck from '../images/duck.png'

const initialState = {
  duckRow: []
};

const ducks = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD_DUCK':
      const addState = Object.assign({}, state);
      addState.duckRow.push(aDuck);
      return addState;
    case 'REMOVE_DUCK':
      const removeState = Object.assign({}, state);
      removeState.duckRow.pop();
      return removeState;
    default:
      return state
  }
};

export default ducks