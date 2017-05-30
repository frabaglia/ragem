import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import {
  channelType
} from '../../types/channel'
import channelModel from '../../../models/channel'

export default {
  type: channelType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args) => {
    const removedChannel = channelModel.findByIdAndRemove(args.id).exec()
    if (!removedChannel) {
      throw new Error('Error removing channel.')
    }
    return removedChannel
  }
}
