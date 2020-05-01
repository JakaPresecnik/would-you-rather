export const SET_USER = 'SET_USER'

export function setUser (authedUser) {
  return {
    type: SET_USER,
    authedUser,
  }
}
