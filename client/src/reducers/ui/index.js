const initialMessageState = {
  uid: undefined,
  accessToken: undefined,
  username: "a",
  channel: "b"
}

export default function messageReducer(state = initialMessageState, action) {
  switch (action.type) {
    case "UPDATE_USERNAME_INPUT":
      {
        let _state = Object.assign({}, state, {
          username: action.payload.username
        })
        return _state
        break
      }

    case "UPDATE_CHANNEL_INPUT":
      {
        let _state = Object.assign({}, state, {
          channel: action.payload.channel
        })
        return _state
        break
      }

    default:
      return state
  }

  return state
}
