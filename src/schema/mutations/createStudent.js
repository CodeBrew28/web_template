import { GraphQLString, GraphQLBoolean } from 'graphql';
import StudentType from '../types/StudentType'

import Student from '../../models/student'

const createStudent = {
  type: StudentType,
  args: {
    email: { type: GraphQLString },
    password: { type: GraphQLString }
  },
  resolve(root, args, context) {
    return 'I\'m a new User!';
  },
};

export default createStudent;
