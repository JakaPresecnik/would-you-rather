import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { handleSaveQuestion } from '../actions'

class NewQuestion extends Component {
  state = {
    textOne: '',
    textTwo: '',
    toHome: false,
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
    this.setState({toHome: true})
  }

  render() {
    const { textOne, textTwo, toHome } = this.state

    if(toHome) {
      return <Redirect to='/would-you-rather/' />
    }

    return (
      <section className='new-question'>
        <h3>Create a New Question</h3>
        <div className='inline-div'>
          <p>Would you rather...</p>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type='text' placeholder='Enter option one here...' id='option-one' value={textOne} onChange={(e) => this.handleChange(e, 'textOne')} />
            <p>... or ...</p>
            <input type='text' placeholder='Enter option two here...' id='option-two' value={textTwo} onChange={(e) => this.handleChange(e, 'textTwo')} />
            <button disabled={textOne === '' || textTwo === ''}>SUBMIT</button>
          </form>
        </div>
      </section>
    )
  }
}

const mapStateToProps = ({authedUser}) => {
  return {
    author: authedUser.id
  }
}

export default connect(mapStateToProps)(NewQuestion)
