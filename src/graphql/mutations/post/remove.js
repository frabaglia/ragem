import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import {
  postType
} from '../../types/post'
import postModel from '../../../models/post'

export default {
  type: postType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    }
  },
  resolve: (root, args) => {
    const removedPost = postModel.findByIdAndRemove(args.id).exec()
    if (!removedPost) {
      throw new Error('Error removing post.')
    }
    return removedPost
  }
}
