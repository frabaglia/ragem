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

    let findUserPromise = userModel.findOne({
      name: args.user.name
    }).exec()

    let findChannelPromise = channelModel.findOne({
      name: args.channel.name
    }).exec()

    const newChannel = Promise.all([findUserPromise, findChannelPromise]).then((resolvedValues) => {
        let user = resolvedValues[0]
        let channel = resolvedValues[1]
        /* Retrieving existent user or creating new one */
        let promisesArray = new Array()

        /* User */
        if (user) {
          let userPromise = new Promise((res, rej) => {
            res(user)
          })
          promisesArray.push(userPromise)
        } else {
          const newUserModel = new userModel(args.user)
          promisesArray.push(newUserModel.save())
        }
        /* Channel */
        if (channel) {
          let channelPromise = new Promise((res, rej) => {
            res(channel)
          })
          promisesArray.push(channelPromise)
        } else {
          const newChannelModel = new channelModel(args.channel)
          promisesArray.push(newChannelModel.save())
        }
        return Promise.all(promisesArray)
      })
      .then((resolvedValues) => {
        /* Pushing user to the list */
        let user = resolvedValues[0]
        let channel = resolvedValues[1]

        console.log(user._id);
        channel.uids.push(user._id)
        console.log(channel);

        return channel.save()
      })
      .catch(error => new Error(JSON.stringify(error)))

    if (!newChannel) {
      throw new Error('Error adding new channel.')
    }

    return newChannel
  }
}
