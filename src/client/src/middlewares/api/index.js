import {
  API
} from '../../constants/action-types'

import axios from 'axios'

export const apiMiddleware = ({
  dispatch
}) => next => action => {

  if (action.type !== API) {
    return next(action)
  }

  const {
    payload
  } = action

  axios.get(payload.url)
    .then(response => {
      dispatch({
        type: payload.success,
        payload: {
          message: {
            content: response.data
          }
        }
      })
    }).catch(error => {
      //TODO: Dispatch error
    })
}
