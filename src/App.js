import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDuck, removeDuck } from './actions/index';

class App extends Component {

  static propTypes = {
    duckRow: PropTypes.array,
    onAddClick: PropTypes.func,
    onRemoveClick: PropTypes.func
  };

  render() {
    const {onAddClick, onRemoveClick, duckRow} = this.props;

    let id = 0;

    return (
      <div>

        <div className="buttons">
          <button onClick={onAddClick}>Add duck</button>
          <button onClick={onRemoveClick}>Remove duck</button>
        </div>

        <div>
          {duckRow.map(
            (duck) => <img key={id++} src={duck} alt="a duck"/>
          )}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    duckRow: state.ducks.duckRow,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddClick: () => {
      dispatch(addDuck())
    },
    onRemoveClick: () => {
      dispatch(removeDuck())
    },
  }
};

App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
