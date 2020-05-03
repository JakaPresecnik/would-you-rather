import { GET_USERS, SAVE_USER_ANSWER } from '../actions/users'

export default function users(state = {}, action) {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        ...action.users,
      }
      case SAVE_USER_ANSWER:
        return {
          ...state,
          [action.authedUser]: {
            ...state[action.authedUser],
              answers: {
                ...state[action.authedUser].answers,
                  [action.qid]: action.answer,
              }
          }
        }
      default:
        return state
  }
}
