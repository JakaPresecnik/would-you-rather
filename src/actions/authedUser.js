export const SET_USER_ID = 'SET_USER_ID'
export const SET_USER_DATA = 'SET_USER_DATA'

export function setUserId (authedUser) {
  return {
    type: SET_USER_ID,
    authedUser,
  }
}
