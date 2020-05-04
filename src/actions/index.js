import { _getQuestions, _getUsers, _saveQuestionAnswer } from '../data/_DATA'
import { getQuestions, saveQuestionAnswer } from './questions'
import { getUsers, saveUserAnswer } from './users'
import { saveAnswer } from './authedUser'

export function handleGetQuestions (questions) {
  return (dispatch) => {
    return _getQuestions()
    .then((questions) => {
      dispatch(getQuestions(questions))
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
