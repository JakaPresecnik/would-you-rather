export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SAVE_QUESTION_ANSWER ='SAVE_ANSWER'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions,
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
