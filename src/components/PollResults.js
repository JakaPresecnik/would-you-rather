import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResults extends Component {
  render() {
    const { question, answer } = this.props

    return (
      <div className='inline-div'>
        <p className='bigger-text'>Result:</p>
        <div className={answer ==='optionOne' ? ('answered') : ('unanswered')}>
          <p>Would you rather {question.optionOne.text}?</p>
          <progress value={question.optionOne.votes.length} max={question.optionOne.votes.length + question.optionTwo.votes.length} data-label={Math.floor(question.optionOne.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100)}> </progress>
          <p>{question.optionOne.votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes</p>
          {answer ==='optionOne' && (
            <div className='badge'><p>YOUR VOTE</p></div>
          )}
        </div>
        <div className={answer ==='optionTwo' ? ('answered') : ('unanswered')}>
          <p>Would you rather {question.optionTwo.text}?</p>
          <progress value={question.optionTwo.votes.length} max={question.optionOne.votes.length + question.optionTwo.votes.length} data-label={Math.floor(question.optionTwo.votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100)}> </progress>
          <p>{question.optionTwo.votes.length} out of {question.optionOne.votes.length + question.optionTwo.votes.length} votes</p>
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
