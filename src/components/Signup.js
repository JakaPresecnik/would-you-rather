import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Signup extends Component {
  render(){
    return (
      <section className='login'>
        <h2>Welcome to Would you rather app!</h2>
        <Link to='/login'><button>BACK</button></Link>
        <form>
          <label for='first-name'>First Name:</label>
          <input type='text' placeholder='First Name' />
          <label for='last-name'>Last Name:</label>
          <input type='text' placeholder='Last Name' />
          <label for='username'>Username:</label>
          <input type='text' placeholder='Desired Username' />
          <label for='avatarURL'>Avatar URL:</label>
          <input type='text' placeholder='URL to avatar' />

          <button>SUBMIT</button>
        </form>
      </section>
    )
  }
}

export default Signup
