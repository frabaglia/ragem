import {
  GraphQLNonNull
} from 'graphql'

import {
  channelType,
  channelInputType
} from '../../../types/channel'

import {
  userType,
  userInputType
} from '../../../types/user'

import channelModel from '../../../../models/channel'
import userModel from '../../../../models/user'

export default {
  type: channelType,
  args: {
    user: {
      name: 'user',
      type: new GraphQLNonNull(userInputType)
    },
    channel: {
      name: 'channel',
      type: new GraphQLNonNull(channelInputType)
    }
  },
  resolve: (root, args) => {

    var userPromise = userModel.findOne({
      name: args.user.name
    }).exec()

    const newChannel = userPromise.then((user) => {
        /* Retrieving existent user or creating new one */
        if (user) {
          return new Promise((res, rej) => {
            res(user)
          })
        } else {
          const newUserModel = new userModel(args.user)
          return newUserModel.save()
        }
      })
      .then((user) => {
        /* Retrieving existent channel or creating new one */
        var channelPromise = channelModel.findOne({
          name: args.channel.name
        }).exec()

        return channelPromise
      }).then((channel) => {
        if (channel) {
          return new Promise((res, rej) => {
            res(channel)
          })
        } else {
          const newChannelModel = new channelModel(args.channel)
          return newChannelModel.save()
        }
      })
      .catch(error => new Error('Error updating messages messages.'))

    if (!newChannel) {
      throw new Error('Error adding new channel.')
    }

    return newChannel
  }
}
