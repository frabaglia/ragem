import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID,
  GraphQLList
} from 'graphql'

import messageModel from '../../models/message'
import {
  messageType
} from './message'

export const channelType = new GraphQLObjectType({
  name: 'Channel',
  description: 'Channel API',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: new GraphQLNonNull(GraphQLString)
    },
    messages: {
      type: new GraphQLList(messageType),
      resolve(channel) {
        const {
          _id
        } = channel
        return messageModel.find({
          uid: _id
        }).exec()
      }
    }
  })
})

export const channelInputType = new GraphQLInputObjectType({
  name: 'ChannelInput',
  description: 'Insert Input',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString)
    }
  })
})
