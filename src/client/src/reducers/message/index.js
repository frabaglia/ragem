const initialMessageState = [{
  uid: 1,
  content: "Hola soy carlos..."
}, {
  uid: 2,
  content: "Hola soy felipe..."
}]

export default function messageReducer(state = initialMessageState, action) {
  switch (action.type) {
    case "PUSH_MESSAGE":
      {
        return state.concat({
          uid: 1,
          content: action.payload.message.content
        })
        break
      }

    default:
      return state
  }
  return state
}
