import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import {
  messageType
} from '../../types/message'

import channelModel from '../../../models/channel'

export default {
  type: new GraphQLList(messageType),
  args: {
    channelId: {
      name: 'channelId',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args) => {
    const channel = channelModel.findById(args.channelId).populate("messages").exec()
    const n = channel.messages
    if (!messages) {
      throw new Error('Error querying multiple messages')
    }
    return messages
  }
}
