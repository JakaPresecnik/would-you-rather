import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
  state = {
    answered: false,
  }

  toggleQuestions = (stat) => {
    this.setState({
      answered: stat,
    })
  }

  render(){
    console.log(this.state)
    return (
      <section>
        <div className='questions'>
          <h3 className={`active-${this.state.answered}`} onClick={e => this.toggleQuestions(true)}>Answered questions</h3>
          <h3 className={`active-${!this.state.answered}`} onClick={e => this.toggleQuestions(false)}>Unanswered questions</h3>
        </div>
        <div className='question-list'>
          {this.state.answered ? (
            this.props.questionsIds.map((qid) => {
            return this.props.answers.includes(qid) &&
            <Question key={qid} id={qid}/>
          })) : (
            this.props.questionsIds.map((qid) => {
            return !this.props.answers.includes(qid) &&
            <Question key={qid} id={qid}/>
          }))}
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questionsIds: Object.keys(questions).sort((a, b) => questions[a].timestamp - questions[b].timestamp ),
    answers: Object.keys(authedUser.answers)
  }
}

export default connect(mapStateToProps)(Home)
