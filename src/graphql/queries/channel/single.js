import {
  GraphQLID,
  GraphQLNonNull
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
    return channelModel.findById(args.id).exec()
  }
}
