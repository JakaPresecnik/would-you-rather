import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleSaveQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    textOne: '',
    textTwo: '',
  }

  handleChange = (e, textId) => {
    this.setState({
      [textId]: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(handleSaveQuestion({
      optionOneText: this.state.textOne,
      optionTwoText: this.state.textTwo,
    }))
  }

  render() {
    return (
      <div>
        <h3>Create a New Question</h3>
        <div>
          <p>Would you rather...</p>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type='text' placeholder='Enter option one here...' id='option-one' value={this.state.textOne} onChange={(e) => this.handleChange(e, 'textOne')} />
            <p>... or ...</p>
            <input type='text' placeholder='Enter option two here...' id='option-two' value={this.state.textTwo} onChange={(e) => this.handleChange(e, 'textTwo')} />
            <button disabled={this.state.textOne === '' || this.state.textTwo === ''}>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    author: authedUser.id
  }
}

export default connect(mapStateToProps)(NewQuestion)
