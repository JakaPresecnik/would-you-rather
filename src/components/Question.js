import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { authorName, authorAvatar, question } = this.props

    return(
      <div>
        <p>{authorName} asks:</p>
        <div className='inline-div'>
          <img className='avatar' src={authorAvatar} alt={`Avatar of ${authorName}`}/>
          <div>
            <p>Would you rather...</p>
            <p>...{question.optionOne.text.slice(0, question.optionOne.text.length - 20)}...</p>
            <button>VIEW POLL</button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ questions, users }, { id }) => {
  const question = questions[id]

  return {
    authorName: users[question.author].name,
    authorAvatar: users[question.author].avatarURL,
    question
  }
}

export default connect(mapStateToProps)(Question)
