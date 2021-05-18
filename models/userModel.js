const mongoose = require("mongoose");

const userScheme = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email!"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter your password!"],
  },
  phone: {
    type: String,
  },
  role: {
    type: Number,
    default: 0, // 0 = user, 1 = admin
  },
  avatar: {
    type: String,
    default:
      "https://res.cloudinary.com/di5ucmqey/image/upload/v1620533298/avatar_vyzyeq.png",
  },
  address: {
    type: Object,
    city: {
      type: String,
    },
    streetName: {
      type: String,
    },
    box: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },
},
{
  timestamps: true,
});

module.exports = UserModel = mongoose.model("Users", userScheme);
