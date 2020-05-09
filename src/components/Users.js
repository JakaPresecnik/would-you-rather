import React, { Component } from 'react'
import { connect } from 'react-redux'

class Users extends Component {
  render(){

    const { user, numAnswered } = this.props
    const createdQuestions = user.questions.length

    console.log(user)
    return (
      <div className='grid-div'>
        <img className='avatar' src={user.avatarURL} alt={`Avatar of ${user.name}`}/>
        <div>
          <h3>{user.name}</h3>
          <p>Answered Questions: <span>{numAnswered}</span></p>
          <p>Created Questions: <span>{createdQuestions}</span></p>
        </div>
        <div>
          <p className='score-text'>Score:</p>
          <div className='score'><p>{numAnswered + createdQuestions}</p></div>
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
