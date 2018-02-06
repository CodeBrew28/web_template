const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {  type: String },
    password: { type: String },
    owner: { type: Schema.Types.ObjectId } // point to Student or Teacher
  });
  
export default mongoose.model('User', UserSchema);