export const GET_USERS = 'GET_USERS'
export const SAVE_USER_ANSWER = 'SAVE_USER_ANSWER'

export function getUsers (users) {
  return {
    type: GET_USERS,
    users,
  }
}

export function saveUserAnswer ({authedUser, qid, answer}) {
  return {
    type: SAVE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  }
}
