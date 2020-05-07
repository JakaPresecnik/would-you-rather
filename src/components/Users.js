import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  render(){

    const { user, numAnswered } = this.props
    const createdQuestions = user.questions.length

    console.log(user)
    return (
      <div className='question'>
        <img className='avatar' src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
        <div>
          <p>{user.name}</p>
          <p>Answered Questions: <span>{numAnswered}</span></p>
          <p>Created Questions: <span>{createdQuestions}</span></p>
        </div>
        <div>
          <p>Score:</p>
          <p>{numAnswered + createdQuestions}</p>
        </div>

      </div>
    )
  }
}

const mapStateToProps = ({ users }, { id }) => {
  const user = users[id]

  return {
    user,
    numAnswered: Object.keys(user.answers).length,
  }
}

export default connect(mapStateToProps)(Users)
