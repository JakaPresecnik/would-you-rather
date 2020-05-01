import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUser } from '../actions/authedUser'

class Login extends Component {
  state = {
    authedUser: '',
  }

  handleLogIn = (e, authedUser) => {
    e.preventDefault()
    this.props.dispatch(setUser(authedUser))
  }

  render() {
    const { users } = this.props

    return (
      <div>
        <p>Welcome to Would you rather app!</p>
        <p>Please log in to continue</p>
        <img className='intro-icon' src='https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.3/1551449028703/Microsoft.VisualStudio.Services.Icons.Default' alt='react and redux logo combined' />
        <form onSubmit={e => this.handleLogIn(e, this.state.authedUser)}>
          <input list="users" placeholder='Select User' onChange={e => this.setState({authedUser: e.target.value})}/>
          <datalist id="users">
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </datalist>
          <button disabled={this.state.authedUser === ''}>SUBMIT</button>
        </form>
      </div>
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
    users: usersNames
  }
}

export default connect(mapStateToProps)(Login)
