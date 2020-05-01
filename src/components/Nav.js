import React, { Component } from 'react'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const { authedUserName, authedUserAvatar } = this.props
    return(
      <div>
        <nav>
          <ul>
            <li>Home</li>
            <li>NewQuestion</li>
            <li>Leaderboard</li>
          </ul>
        </nav>
        <div>
          <p>{authedUserName}</p>
          <img className='avatar' src={authedUserAvatar} alt= {`Avatar of ${authedUserName}`}/>
          <p>LOGOUT</p>
        </div>
      </div>
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
