import { GraphQLObjectType } from 'graphql';
import CreateUser from './createUser.js';


const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  description: 'Your Root Mutation',
  fields() {
    return { CreateUser };
  },
});

export default Mutation;
