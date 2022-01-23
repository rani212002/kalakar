var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema({
    type: String,
    email: { type: String, unique: [true, 'this email already exists'], required: [true, 'email is required'] },
    username: { type: String, unique: [true, 'this username already exists'], required: [true, 'username is required'] },
    password: { type: String, required: [true, 'password is required'] },
    phone_number: { required: [true, 'phone number is required'], unique: [true, 'this phone number already exists'], type: Number }
});
User = mongoose.model('User', userSchema);

module.exports = User;