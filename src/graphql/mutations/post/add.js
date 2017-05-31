import {
  GraphQLNonNull
} from 'graphql'

import {
  postType,
  postInputType
} from '../../types/post'
import postModel from '../../../models/post'

export default {
  type: postType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(postInputType)
    }
  },
  resolve: (root, args) => {
    const newPostModel = new postModel(args.data)
    const newPost = newPostModel.save()
    if (!newPost){
      throw new Error('Error adding new post.')
    }
    return newPost
  }
}
