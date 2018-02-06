import { GraphQLObjectType, GraphQLString } from 'graphql';
const mongoose = require('mongoose');

const User = new GraphQLObjectType({
  name: 'User',
  description: 'users',
  fields() {
    return {
      email: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      },
    };
  },
});

export default User;
