export const SET_USER_ID = 'SET_USER_ID'
export const SAVE_ANSWER = 'SAVE_ANSWER'

export function setUserId (authedUser) {
  return {
    type: SET_USER_ID,
    authedUser,
  }
}

export function saveAnswer ({authedUser, qid, answer}) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer,
  }
}
