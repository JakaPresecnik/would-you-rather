import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'

import { handleGetQuestions, handleGetUsers } from '../actions'
import Nav from './Nav'
import Home from './Home'
import Leaderboard from './Leaderboard'
import NewQuestion from './NewQuestion'
import Poll from './Poll'
import Login from './Login'
import NoMatch from './NoMatch'
import Signup from './Signup'
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
          <LoadingBar />
          {this.props.authedUser === null
          ? <Redirect to='/login' />
          :
          <div className='container'>
            <Nav />
            <Switch>
              <Route path='/add' component={NewQuestion} />
              <Route path='/' exact component={Home} />
              <Route path='/questions/:question_id' component={Poll} />
              <Route path='/leaderboard' component={Leaderboard} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        }
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
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
