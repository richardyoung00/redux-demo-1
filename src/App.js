import React, { Component } from 'react';
import './App.css';

// import connect and our actions
import { connect } from 'react-redux';
import { addDuck, removeDuck } from './actions/ducks';

class App extends Component {

  render() {
    // get variables from props
    const {onAddClick, onRemoveClick, duckRow} = this.props;

    return (
      <div>

        <h1 className="header">A row of ducks</h1>

        {/* render some buttons */}
        <div className="buttons">
          <button onClick={onAddClick}>Add duck</button>
          <button onClick={onRemoveClick}>Remove duck</button>
        </div>

         {/* render list of ducks */}
        <div>
          {duckRow.map(
            (duck, index) => <img key={index} src={duck} alt="a duck"/>
          )}
        </div>

      </div>
    );
  }
}

// maps state to props
const mapStateToProps = (state) => {
  return {
    duckRow: state.ducks.duckRow,
  }
};

// map dispatch to props
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

// connect our component to redux state
App = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default App;
