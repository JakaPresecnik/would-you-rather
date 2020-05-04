import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResults extends Component {
  render() {
    const { question, answer } = this.props

    return (
      <div className='inline-div'>
        <p>Result:</p>
        <div className={answer ==='optionOne' ? ('answered') : ('unanswered')}>
          <p>Would you rather {question.optionOne.text}?</p>
          <progress value={question.optionOne.votes.length} max={question.optionOne.votes.length + question.optionTwo.votes.length}> 32% </progress>
          <p>{question.optionOne.votes.length} of {question.optionOne.votes.length + question.optionTwo.votes.length}</p>
          {answer ==='optionOne' && (
            <div className='badge'><p>YOUR VOTE</p></div>
          )}
        </div>
        <div className={answer ==='optionTwo' ? ('answered') : ('unanswered')}>
          <p>Would you rather {question.optionTwo.text}?</p>
          <progress value={question.optionTwo.votes.length} max={question.optionOne.votes.length + question.optionTwo.votes.length}> 32% </progress>
          <p>{question.optionTwo.votes.length} of {question.optionOne.votes.length + question.optionTwo.votes.length}</p>
          {answer ==='optionTwo' && (
            <div className='badge'><p>YOUR VOTE</p></div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({questions}, { id, answers }) => {
  return {
    answer: answers[id], // optionOne
    question: questions[id],
  }
}

export default connect(mapStateToProps)(PollResults)
