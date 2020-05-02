import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserId } from '../actions/authedUser'

class Login extends Component {
  state = {
    authedUser: '',
  }

  handleLogIn = (e, authedUser) => {
    e.preventDefault()
    this.props.dispatch(setUserId(this.props.users[authedUser]))
  }

  render() {
    const { usersArray } = this.props
    console.log(this.props)

    return (
      <section class='login'>
        <h2>Welcome to Would you rather app!</h2>
        <p>Please log in to continue</p>
        <img className='App-logo' src='https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.3/1551449028703/Microsoft.VisualStudio.Services.Icons.Default' alt='react and redux logo combined' />
        <form onSubmit={e => this.handleLogIn(e, this.state.authedUser)}>
          <input id='select-user' list="users" placeholder='Select User' onChange={e => this.setState({authedUser: e.target.value})}/>
          <datalist id="users">
            {usersArray.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </datalist>
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
