import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserId } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    authedUser: '',
    toHome: false,
  }

  handleLogIn = (e, authedUser) => {
    e.preventDefault()
    this.setState({toHome: true})
    setTimeout(() => {this.props.dispatch(setUserId(this.props.users[authedUser]))}, 0)
  }

  render() {
    const { usersArray } = this.props

    if(this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <section className='login'>
        <h2>Welcome to Would you rather app!</h2>
        <p>Please sign in to continue</p>
        <img className='App-logo' src='https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.3/1551449028703/Microsoft.VisualStudio.Services.Icons.Default' alt='react and redux logo combined' />
        <form onSubmit={e => this.handleLogIn(e, this.state.authedUser)}>
          <select id='select-user' list="users" onChange={e => this.setState({authedUser: e.target.value})}>
            <option selected disabled hidden>Select user</option>
            {usersArray.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}

          </select>
          <button disabled={this.state.authedUser === ''}>SUBMIT</button>
        </form>
      </section>
    )
  }
}

const mapStateToProps = ({users}) => {
  const usersIdsArray = Object.keys(users)
  const usersNames = usersIdsArray.map((u) => {
    return {
      name: users[u].name,
      id: users[u].id
  }})

  return {
    usersArray: usersNames,
    users
  }
}

export default connect(mapStateToProps)(Login)
