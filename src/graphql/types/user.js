import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLList
} from 'graphql'

import messageModel from '../../models/message'
import {messageType} from './message'

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'User API',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    }
  })
})

export const userInputType = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Insert User',
  fields: () => ({
    name: {
      type: GraphQLString
    }
  })
})
