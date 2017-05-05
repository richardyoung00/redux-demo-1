import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addDuck, removeDuck } from './actions/index';


class App extends Component {

  static propTypes = {
    onAddClick: PropTypes.func,
    onRemoveClick: PropTypes.func
  };

  render() {
    return (
      <div>
        <div className="buttons">
          <button onClick={this.props.onAddClick}>Add duck</button>
          <button onClick={this.props.onRemoveClick}>Remove duck</button>
        </div>
        <div>
          {this.props.ducks.duckRow.map((duck) => <img src={duck} alt="a duck"/> )}
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ducks: state.ducks,
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
