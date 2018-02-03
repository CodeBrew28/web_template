import { GraphQLObjectType, GraphQLString } from 'graphql';

const User = new GraphQLObjectType({
  name: 'User',
  description: 'users',
  fields() {
    return {
      email: {
        type: GraphQLString,
        resolve(email) {
          return email;
        },
      },
      password: {
        type: GraphQLString,
        resolve(password) {
          return password;
        },
      },


    };
  },
});

export default User;
