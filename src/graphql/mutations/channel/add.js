import {
  GraphQLNonNull
} from 'graphql'

import {
  channelType,
  channelInputType
} from '../../types/channel'
import channelModel from '../../../models/channel'

export default {
  type: channelType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(channelInputType)
    }
  },
  resolve: (root, args) => {
    const newChannelModel = new channelModel(args.data)
    const newChannel = newChannelModel.save()
    if (!newChannel){
      throw new Error('Error adding new channel.')
    }
    return newChannel
  }
}
