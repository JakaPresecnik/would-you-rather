import { SET_USER_ID } from '../actions/authedUser'

export default function authedUser(state = {
  id: 'johndoe',
  name: 'John Doe',
  avatarURL: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png',
  answers: {
    "xj352vofupe1dqz9emx13r": 'optionOne',
    "vthrdm985a262al8qx3do": 'optionTwo',
    "6ni6ok3ym7mf1p33lnez": 'optionTwo'
  },
  questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
}, action) {
  switch(action.type) {
    case SET_USER_ID:
      return action.authedUser

    default:
      return state
  }
}
