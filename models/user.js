
const mongoose = require("mongoose");
const {Schema} = mongoose;
const passportLocalMongoose = require("passport-local-mongoose").default;
const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});
// console.log(passportLocalMongoose);
// console.log(typeof passportLocalMongoose);

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("User", userSchema);
module.exports = User;