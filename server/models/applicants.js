const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  profile: {
    type: String,
    required: true
  },
  type: {
      type: String,
      required: true
  },
  description: {
      type: String,
      required: true
  },
  experience: {
      type: String,
      required: true
  },
  technology: {
      type: [String],
      default: [], 
      requried: true
  },
  salary: {
      type: String,
      required: true
  }
});

module.exports = mongoose.model('Applicants', applicantSchema, 'applicants');