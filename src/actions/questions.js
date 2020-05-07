import { _saveQuestion } from '../data/_DATA.js'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION = 'SAVE_QUESTION'
export const SAVE_QUESTION_ANSWER ='SAVE_ANSWER'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

export function saveQuestion (question) {
  return {
    type: SAVE_QUESTION,
    question,
  }
}

export function saveQuestionAnswer ({authedUser, qid, answer}) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
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
    .then((question) => dispatch(saveQuestion(question)))

  }
}
