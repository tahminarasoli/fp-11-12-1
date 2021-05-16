const mongoose= require("mongoose");

const helpSchema = mongoose.Schema({

    name:{
        
    },
    helpTitle:{
        type: String
    },
    description:{
        type: String
    },
    dateChoice:{
        type: String,
       

    },
    availableSlot:{
        type: Array,
        values:["anytime", "08.00-12.00"]

    },
    wantsToHelp: {
        type: Boolean,
        require: true
    }
});

module.exports = HelpModel = mongoose.model("Help", helpSchema);