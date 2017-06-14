import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import {
  messageType
} from '../../types/message'

import channelModel from '../../../models/channel'
import messageModel from '../../../models/message'

export default {
  type: new GraphQLList(messageType),
  args: {
    channelId: {
      name: 'channelId',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args) => {
    let channelPromise = channelModel.findById(args.channelId).populate("messages").exec()

    channelPromise
    .then((channel) => {
      const messages = channel.messages
      console.log("messages");
      console.log(messages);
      if (!messages) {
        throw new Error('Error querying multiple messages')
      }
    })
    .catch(error => new Error(JSON.stringify(error)))
  }
}
