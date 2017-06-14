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
    const newMessageModel = new messageModel({ ...args.message,
      channel: args.channelId
    })
    const channelPromise = channelModel.findById(args.channelId).exec()

    let promiseArray = new Array()
    promiseArray.push(newMessageModel.save(), channelPromise)
    const newMessage = Promise.all(promiseArray)
      .then((resolvedValues) => {
        let message = resolvedValues[0]
        let channel = resolvedValues[1]
        let {
          messages
        } = channel

        return channelModel.findByIdAndUpdate(args.channelId, {
          $set: {
            messages: messages.concat([message._id])
          }
        }).exec()
      })
      .catch(error => new Error('Error updating messages messages.'))

      if (!newMessage) {
        throw new Error('Error adding new channel.')
      }

      return newMessage

  }
}
