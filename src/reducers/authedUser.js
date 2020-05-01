import { SET_USER_ID } from '../actions/authedUser'

export default function authedUser(state = {
  id: 'tylermcginnis',
  name: 'Tyler McGinnis',
  avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  answers: {
    "vthrdm985a262al8qx3do": 'optionOne',
    "xj352vofupe1dqz9emx13r": 'optionTwo',
  },
  questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
}, action) {
  switch(action.type) {
    case SET_USER_ID:
      return action.authedUser

    default:
      return state
  }
}
