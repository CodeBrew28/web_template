import { GraphQLString, GraphQLBoolean } from 'graphql';
import User from './../types/UserType.js';

const CreateUser = {
  type: User,
  args: { isCool: { type: GraphQLBoolean } },
  resolve(root, args, context) {
    return 'I\'m a new User!';
  },
};

export default CreateUser;
