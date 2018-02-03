import { GraphQLObjectType } from 'graphql';
import usertype from './User.js';

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'Your Root Query',
  fields() {
    return { usertype };
  },
});

export default Query;
