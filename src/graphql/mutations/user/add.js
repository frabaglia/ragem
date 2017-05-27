import {
  GraphQLNonNull
} from 'graphql'

import {
  userType,
  userInputType
} from '../../types/user'
import userModel from '../../../models/user'

export default {
  type: userType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInputType)
    }
  },
  resolve: (root, args) => {
    const newUserModel = new userModel(args.data)
    const newUser = newUserModel.save()
    if (!newUser){
      throw new Error('Error adding new user.')
    }
    return newUser
  }
}
