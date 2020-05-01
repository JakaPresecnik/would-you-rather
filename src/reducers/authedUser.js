import { SET_USER } from '../actions/authedUser'

export default function authedUser(state = 'tylermcginnis', action) {
  switch(action.type) {
    case SET_USER:
      return action.authedUser

    default:
      return state
  }
}
