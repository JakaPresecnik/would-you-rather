import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

import { handleGetQuestions, handleGetUsers } from '../actions'
import Nav from './Nav'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import Poll from './Poll'
import Login from './Login'
import '../styles/App.scss';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetUsers())
    this.props.dispatch(handleGetQuestions())
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.props.authedUser === null
          ? <Login /> :
          <div>
            <Nav />
            <Route path='/new' component={NewQuestion} />
            <Route path='/' exact component={Home} />
            <Route path='/poll/:id' component={Poll} />
            <Route path='/leaderboard' component={Leaderboard} />
          </div>
        }
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(App)
