import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import {
  channelType,
  channelInputType
} from '../../../types/channel'

import {
  messageType,
  messageInputType
} from '../../../types/message'

import channelModel from '../../../../models/channel'
import messageModel from '../../../../models/message'

export default {
  type: channelType,
  args: {
    message: {
      name: 'message',
      type: new GraphQLNonNull(messageInputType)
    },
    channelId: {
      name: 'channelId',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args) => {
    const newMessageModel = new channelModel(args.message)
    const channel = new channelModel.findById(args.channelId).populate('messages').exec()

    return channelModel.findByIdAndUpdate(args.channelId, {
        $set: {
          channel: channel.messages.concat([args.message])
        }
      })
      .then(messages => messagesModel.findById(args.id).exec())
      .catch(error => new Error('Error updating messages messages.'))

  }
}
