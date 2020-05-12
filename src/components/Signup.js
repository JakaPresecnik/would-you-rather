import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { handleAddUser } from '../actions'

class Signup extends Component {
  state = {
    firstName: '',
    lastName: '',
    username: '',
    avatarURL: '',
    toHome: false,
  }

  handleChange = (e, label) => {
    this.setState({
      [label]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({toHome: true})
    this.props.dispatch(handleAddUser(this.state))
  }

  render(){
    const { firstName, lastName, username, avatarURL } = this.state

    if(this.state.toHome === true) {
      return <Redirect to='/' />
    }


    return (
      <section className='login'>
        <h2>Welcome to Would you rather app!</h2>
        <Link to='/login'><button>BACK</button></Link>
        <form onSubmit= {e => this.handleSubmit(e)}>
          <label htmlFor='first-name'>First Name:</label>
          <input id='first-name' type='text' placeholder='First Name' onChange={e => this.handleChange(e, 'firstName')}/ >
          <label htmlFor='last-name'>Last Name:</label>
          <input id='last-name' type='text' placeholder='Last Name' onChange={e => this.handleChange(e, 'lastName')}/ >
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' placeholder='Desired Username' onChange={e => this.handleChange(e, 'username')} />
          <label htmlFor='avatarURL'>Avatar URL:</label>
          <input id='avatarURL' type='text' placeholder='URL to avatar' onChange={e => this.handleChange(e, 'avatarURL')}/>

          <button disabled={firstName === '' || lastName === '' || username === '' || avatarURL === ''}>SUBMIT</button>
        </form>
      </section>
    )
  }
}

export default connect()(Signup)
