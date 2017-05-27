import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import {
  userType,
  userInputType
} from '../../types/user'
import userModel from '../../../models/user'

export default {
  type: userType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType)
    }
  },
  resolve: (root, args) => {
    return userModel.findByIdAndUpdate(args.id, {
        $set: { ...args.data
        }
      })
      .then(data => userModel.findById(args.id).exec())
      .catch(error => new Error('Error updating user data.'))
  }
}
