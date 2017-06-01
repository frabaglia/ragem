import {
  API,PUSH_MESSAGE
} from '../../action-types'

export const fetchMessages = () => ({
  type: API,
  payload: {
    url: 'https://api.github.com/zen',
    success: PUSH_MESSAGE
  }
})
export const sendMessage = () => ({
  type: API,
  payload: {
    url: 'https://api.github.com/zen',
    success: PUSH_MESSAGE
  }
})
