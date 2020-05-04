import React, { Component } from 'react'
import { connect } from 'react-redux'

class PollResults extends Component {
  render() {
    const { question } = this.props

    return (
      <div className='inline-div'>
        <p>Result:</p>
        <div>
          <p>Would you rather {question.optionOne.text}?</p>
          <progress value={question.optionOne.votes.length} max={question.optionOne.votes.length + question.optionTwo.votes.length}> 32% </progress>
          <p>{question.optionOne.votes.length} of {question.optionOne.votes.length + question.optionTwo.votes.length}</p>
        </div>
        <div>
          <p>Would you rather {question.optionTwo.text}?</p>
          <progress value={question.optionTwo.votes.length} max={question.optionOne.votes.length + question.optionTwo.votes.length}> 32% </progress>
          <p>{question.optionTwo.votes.length} of {question.optionOne.votes.length + question.optionTwo.votes.length}</p>
        </div>
      </div>
    )
  }
}



export default PollResults
