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
    return messageModel.find({
      channel: args.channelId
    }).exec()
  }
}
