const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  job_title: {
    type: String,
    required: true
  },
  candidate_name: {
    type: String,
    required: true
  },
  candidate_email: {
    type: String,
    required: true
  },
  candidate_phone: {
    type: String,
    required: true
  },
  candidate_city: {
    type: String,
    required: true
  },
  experience: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  expertise_level: {
    type: String,
    required: true
  },
  expected_salary: {
    type: String,
    required: true
  },
  start_date: {
    type: String,
    required: true
  },
  applied_date: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Application', ApplicationSchema);