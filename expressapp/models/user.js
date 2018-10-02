var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');

var schema = new Schema({
    email: {type: String, unique: true},
    username: {type: String},
    password: {type: String},
    typeOfUser: {type: String}
});

schema.statics.hashPassword = function hashPassword(password){
    return bcrypt.hashSync(password, 10);
}

schema.methods.isValid = function(hashedPassword){
    return bcrypt.compareSync(hashedPassword, this.password);
}

module.exports = mongoose.model('User', schema)