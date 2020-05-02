import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setUserId } from '../actions/authedUser'

class Nav extends Component {
  handleLogOut = (e) => {
    e.preventDefault()
    this.props.dispatch(setUserId(null))
  }

  render() {
    const { authedUserName, authedUserAvatar } = this.props
    return(
      <nav>
        <ul>
          <li>Home</li>
          <li>NewQuestion</li>
          <li>Leaderboard</li>
        </ul>
        <div className='dropdown' onClick={this.handleLogOut}>
          <img className='dropdown-pic' src={authedUserAvatar} alt= {`Avatar of ${authedUserName}`} / >
          <div className="dropdown-content">
            <button>LOGOUT</button>
          </div>
        </div>
        <div className='userboard'>
          <p>{authedUserName}</p>
          <img src={authedUserAvatar} alt= {`Avatar of ${authedUserName}`}/>
          <button onClick={this.handleLogOut}>LOGOUT</button>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    authedUserName: authedUser.name,
    authedUserAvatar: authedUser.avatarURL,
  }
}

export default connect(mapStateToProps)(Nav)
