import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql'

export const messageType = new GraphQLObjectType({
  name: 'Message',
  description: 'Message API',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    uid: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: GraphQLString
    }
  })
})

export const messageInputType = new GraphQLInputObjectType({
  name: 'MessageInput',
  description: 'Insert Input',
  fields: () => ({
    uid: {
      type: new GraphQLNonNull(GraphQLString)
    },
    content: {
      type: GraphQLString
    }
  })
})
