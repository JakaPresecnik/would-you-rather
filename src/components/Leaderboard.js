import React, { Component } from 'react'
import { connect } from 'react-redux'
import Users from './Users'

class Leaderboard extends Component {
  render() {
    const { usersIds } = this.props
    return (
      <div>
        {usersIds.map((id) => (
          <Users key={id} id={id}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    usersIds: Object.keys(users),
  }
}

export default connect(mapStateToProps)(Leaderboard)
