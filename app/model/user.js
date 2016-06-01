const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var userSchema = new Schema ({
  name: String,
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  admin: Boolean
},{
  timestamps: true

});

userSchema.methods.generateHash = function(password) {
  return this.password = bcrypt.hashSync(password, 8);
};

userSchema.methods.compareHash = function(password) {
  return bcrypt.compareSync(password, this.password);
};


module.exports = mongoose.model('User', userSchema);
