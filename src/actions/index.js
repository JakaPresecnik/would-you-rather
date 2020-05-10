import { showLoading, hideLoading } from 'react-redux-loading-bar'

import { _getQuestions, _getUsers } from '../data/_DATA'
import { getQuestions, saveQuestionAnswer } from './questions'
import { getUsers, saveUserAnswer } from './users'
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
    dispatch(saveQuestionAnswer(answer), saveUserAnswer(answer), saveAnswer(answer))
  }
}
