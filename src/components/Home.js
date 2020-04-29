import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class Home extends Component {
  render(){
    return (
      <div>
        {this.props.questionsIds.map((qid) => (
          <Question key={qid} id={qid}/>
        ))}
      </div>
    )
  }
}

const mapStateToProps = ({ questions }) => {
  return {
    questionsIds: Object.keys(questions).sort((a, b) => questions[a].timestamp - questions[b].timestamp )
  }
}

export default connect(mapStateToProps)(Home)
