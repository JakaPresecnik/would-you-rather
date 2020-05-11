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
    const { answered } = this.state
    const { questionsIds, answers } = this.props
    return (
      <section>
        <div className='questions'>
          <h3 className={`active-${answered}`} onClick={e => this.toggleQuestions(true)}>Answered questions</h3>
          <h3 className={`active-${!answered}`} onClick={e => this.toggleQuestions(false)}>Unanswered questions</h3>
        </div>
        <div className='question-list'>
          {answered ? (
            questionsIds.map((qid) => {
            return answers.includes(qid) &&
            <Question key={qid} id={qid}/>
          })) : (
            questionsIds.map((qid) => {
            return !answers.includes(qid) &&
            <Question key={qid} id={qid}/>
          }))}
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questionsIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp ),
    answers: Object.keys(authedUser.answers)
  }
}

export default connect(mapStateToProps)(Home)
