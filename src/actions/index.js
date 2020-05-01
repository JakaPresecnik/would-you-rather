import { _getQuestions } from '../data/_DATA'
import { _getUsers } from '../data/_DATA'
import { getQuestions } from './questions'
import { getUsers } from './users'

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
