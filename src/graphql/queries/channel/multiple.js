import {
  GraphQLList
} from 'graphql'

import {
  channelType
} from '../../types/channel'

import channelModel from '../../../models/channel'

export default {
  type: new GraphQLList(channelType),
  resolve: () => {
    const channels = channelModel.find().exec()
    if (!channels){
      throw new Error('Error querying multiple channels')
    }
    return channels
  }
}
