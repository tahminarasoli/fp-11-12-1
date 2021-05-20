const mongoose = require("mongoose");

const helpSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your name!"],
    },
    email: {
        type: String,
        required: [true, "Please enter your email!"],
    },
    phone: {
        type: String,
    },
    avatar: {
        type: String,
    },
    address: {
        type: Object,
    },
    helpTitle: {
        type: String,
        required: [true, "Please enter title for help!"],
    },
    description: {
        type: String,
        required: [true, "Please enter description for help!"],
    },
    availableSlot: {
        type: String,
    },
    wantsToHelp: {
        type: Boolean,
        require: true,
    },
});

module.exports = HelpModel = mongoose.model("Helps", helpSchema);
