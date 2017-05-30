import userMutation from './user'
import channelMutation from './channel'

export default {
  ...userMutation,
  ...channelMutation
}
