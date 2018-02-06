const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
    name: { type: String },
    lessons: [{ type: Schema.Types.ObjectId, ref: 'Lesson' }]
  });
  
export default mongoose.model('Teacher', TeacherSchema);