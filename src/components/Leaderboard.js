import React, { Component } from 'react'
import { connect } from 'react-redux'
import Users from './Users'

class Leaderboard extends Component {
  render() {
    const { usersIds } = this.props
    return (
      <section>
        {usersIds.map((id) => (
          <Users key={id} id={id}/>
        ))}
      </section>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    usersIds: Object.keys(users).sort((a, b) => {
      return Object.keys((users[b].answers).length + users[b].questions.length) - (Object.keys(users[a].answers).length + users[a].questions.length)
    }),
  }
}

export default connect(mapStateToProps)(Leaderboard)
