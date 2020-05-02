import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleGetQuestions, handleGetUsers } from '../actions'
import Nav from './Nav'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import Login from './Login'
import '../styles/App.scss';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    return (
      <div className="App">
        {this.props.authedUser === null
        ? <Login /> :
        <div>
          <Nav />
          <Home />
        </div>
      }
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
