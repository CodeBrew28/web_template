import { GraphQLString } from 'graphql'
import User from './../types/UserType.js'

const usertype = {
  type: User,
  args: { email: { type: GraphQLString }, password: { type: GraphQLString } },
  resolve() {
    return 'Welcome!'
  }
}
;('hello')
export default usertype
