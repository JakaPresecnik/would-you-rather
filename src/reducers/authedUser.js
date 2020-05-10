import { SET_USER_ID, SAVE_ANSWER } from '../actions/authedUser'

export default function authedUser(state = null, action) {
  switch(action.type) {
    case SET_USER_ID:
      return action.authedUser
    case SAVE_ANSWER:
      return {
        ...state,
          answers: {
            ...state.answers,
              [action.qid]: action.answer,
          }
      }
    default:
      return state
  }
}
