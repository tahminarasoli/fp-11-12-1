const mongoose = require("mongoose");

const userScheme = mongoose.Schema({
  name: {
    type: Object,
    first: {
      type: String,
      required: true,
    },
    last: {
      type: String,
      required: true,
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
  },
  image: {
    type: String,
  },
  address: {
    type: Object,
    address: {
      type: String,
    },
    city: {
      type: String,
    },
    postcode: {
      type: String,
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

module.exports = UserModel = mongoose.model("User", userScheme);
