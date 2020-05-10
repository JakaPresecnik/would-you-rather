import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from '../data/_DATA'
import { getQuestions, saveQuestionAnswer, saveQuestion } from './questions'
import { getUsers, saveUserAnswer, saveUserQuestion } from './users'
import { saveAnswer } from './authedUser'

export function handleGetQuestions (questions) {
  return (dispatch) => {
    dispatch(showLoading())
    return _getQuestions()
    .then((questions) => {
      dispatch(getQuestions(questions))
      dispatch(hideLoading())
    })
  }
}

export function handleGetUsers(users) {
  return (dispatch) => {
    return _getUsers()
    .then((users) => {
      dispatch(getUsers(users))
    })
  }
}

export function handleSaveAnswer(answer) {
  return (dispatch) => {
    return _saveQuestionAnswer(answer)
    .then(() => {
      dispatch(saveQuestionAnswer(answer), saveAnswer(answer))
      dispatch(saveUserAnswer(answer))
    })
  }
}

export function handleSaveQuestion({optionOneText, optionTwoText}) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id,
    })
    .then((res) => {
      dispatch(saveQuestion(res))
      dispatch(saveUserQuestion(res.id, res.author))
    })

  }
}
