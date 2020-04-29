import { _getUsers } from '../data/_DATA'

export const GET_USERS = 'GET_USERS'

function getUsers (users) {
  return {
    type: GET_USERS,
    users,
  }
}

export function handleGetUsers (users) {
  return (dispatch) => {
    return _getUsers()
    .then((users) => {
      dispatch(getUsers(users))
    })
  }
}
