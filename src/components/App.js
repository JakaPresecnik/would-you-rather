import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/users'
import { handleGetQuestions } from '../actions/questions'
import Home from './Home'
import Leaderboard from './Leaderboard'
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    return (
      <div className="App">
        <Leaderboard />
      </div>
    )
  }
}

export default connect()(App)
