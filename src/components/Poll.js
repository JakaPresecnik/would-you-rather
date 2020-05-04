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
    console.log(this.props.location.state.question)

    return(
      <section>
        <div className='question'>
          <p className='question-header'>{authorName} asks:</p>
          <img className='avatar' src={authorAvatar} alt={`Avatar of ${authorName}`}/>


          {!Object.keys(authedUser.answers).includes(question.id) ? (
              <div className='inline-div'>
                <p>Would you rather...</p>
                <form onSubmit={e => this.handleSubmit(e)}>
                  <input onChange={(e) => this.handleSelect(e)} type="radio" name='option' id='optionOne' value='optionOne'/>
                  <label htmlFor='optionOne'>{question.optionOne.text}</label>
                  <br />
                  <input onChange={(e) => this.handleSelect(e)} type="radio" name='option' id='optionTwo' value='optionTwo'/>
                  <label htmlFor='optionTwo'>{question.optionTwo.text}</label>
                  <button disabled={!this.state.answer}>SUBMIT</button>
                </form>
              </div>
            ) : (
              <PollResults key={question.id} question={question} />
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
