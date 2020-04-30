import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetUsers } from '../actions/users'
import { handleGetQuestions } from '../actions/questions'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import Login from './Login'
import '../styles/App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    return (
      <div className="App">
        <Login />
      </div>
    )
  }
}

export default connect()(App)
