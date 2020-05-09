import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSaveAnswer } from '../actions'
import PollResults from './PollResults'

class Poll extends Component {
  state = {
    answer: '',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleSaveAnswer({
      authedUser: this.props.authedUser.id,
      qid: this.props.location.state.question.id,
      answer: this.state.answer
    }))
  }

  handleSelect = (e) => {
    this.setState({answer: e.target.value})
  }

  render() {
    const { question, authorName, authorAvatar } = this.props.location.state
    const { authedUser } = this.props

    return(
      <section>
        <div className='question'>
          <p className='question-header'>{authorName} asks:</p>
          <img className='avatar' src={authorAvatar} alt={`Avatar of ${authorName}`}/>


          {!Object.keys(authedUser.answers).includes(question.id) ? (
              <div className='inline-div'>
                <p className='bigger-text'>Would you rather...</p>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <input onChange={(e) => this.handleSelect(e)} type="radio" name='option' id='optionOne' value='optionOne'/>
                  <label htmlFor='optionOne'><span></span>{question.optionOne.text}</label>
                  <p>or</p>
                  <input onChange={(e) => this.handleSelect(e)} type="radio" name='option' id='optionTwo' value='optionTwo'/>
                  <label htmlFor='optionTwo'><span></span>{question.optionTwo.text}</label>
                  <button disabled={!this.state.answer}>SUBMIT</button>
                </form>
              </div>
            ) : (
              <PollResults key={question.id} id={question.id} answers={authedUser.answers}/>
            )
          }



        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  }
}

export default connect(mapStateToProps)(Poll)
