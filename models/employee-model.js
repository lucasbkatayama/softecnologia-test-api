const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
      required: true,
      type: String
  },
  email: {
      required: true,
      type: String
  },
  phone: {
    required: true,
      type: String
  },
  salary: {
    required: true,
    type: Number
  }
})

employeeSchema.virtual('id').get(function(){
  return this._id.toHexString();
});

employeeSchema.set('toJSON', {
  virtuals: true
});

module.exports = mongoose.model('Employee', employeeSchema)