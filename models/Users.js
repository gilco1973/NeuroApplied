const mongoose = require('mongoose');
const UserType = require('../common/UserType');
const UsersSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: String,
    imgUrl: String,
    firstName:String,
    lastName: String,
    mobile:String,
    salt: String,
    userType: {type: Number, default: UserType.Customer},
});

UsersSchema.index({
    "email" : 1
});



const Users = mongoose.model('Users',UsersSchema,'Users');


module.exports = Users;