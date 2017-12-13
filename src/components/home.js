import React, { Component } from 'react';
import { connect } from 'react-redux';
import getQuestions from '../utils/questionsApi';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getQuestions();
  }

  render() {
    return (
      <div>
        lol
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    home: state.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: () => {
      dispatch(getQuestions());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
