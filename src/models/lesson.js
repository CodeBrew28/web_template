const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LessonSchema = new Schema({
    name: { type: String }
  });
  
export default mongoose.model('Lesson', LessonSchema);