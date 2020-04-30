import React, { Component } from 'react'

class Login extends Component {
  render() {
    return (
      <div>
        <p>Welcome to Would you rather app!</p>
        <p>Please log in to continue</p>
        <img className='intro-icon' src='https://equimper.gallerycdn.vsassets.io/extensions/equimper/react-native-react-redux/2.0.3/1551449028703/Microsoft.VisualStudio.Services.Icons.Default' alt='react and redux logo combined' />
        <form>
          <input list="users" placeholder='Select User' />
          <datalist id="users">
            <option value="EDIT LATER" />
          </datalist>
          <button>SUBMIT</button>
        </form>
      </div>
    )
  }
}

export default Login
