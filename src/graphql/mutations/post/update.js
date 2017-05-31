import {
  GraphQLNonNull,
  GraphQLID
} from 'graphql'

import {
  postType,
  postInputType
} from '../../types/post'
import postModel from '../../../models/post'

export default {
  type: postType,
  args: {
    id: {
      name: 'id',
      type: new GraphQLNonNull(GraphQLID)
    },
    data: {
      name: 'data',
      type: new GraphQLNonNull(postInputType)
    }
  },
  resolve: (root, args) => {
    return postModel.findByIdAndUpdate(args.id, {
        $set: { ...args.data
        }
      })
      .then(data => postModel.findById(args.id).exec())
      .catch(error => new Error('Error updating post data.'))
  }
}
