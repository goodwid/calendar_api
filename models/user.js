const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = new Schema ({
  name: String,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  admin: Boolean,
  created_at: Date,
  updated_at: Date
});

userSchema.pre('save', function(next) {
  var currentDate = new Date();
  this.updated_at = currentDate;

  // if created_at doesn't exist, add to that field
  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

var User = mongoose.model('User', userSchema);

module.exports = userSchema;
