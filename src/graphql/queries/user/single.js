import {
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

import {
  userType
} from '../../types/user'

import userModel from '../../../models/user'

export default {
  type: userType,
  args: {
    id: {
      name: 'ID',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args) => {
    return userModel.findById(args.id).exec()
  }
}
