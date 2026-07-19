const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    firstName:{

        type:String,

        required:true

    },

    lastName:{

        type:String,

        required:true

    },

    email:{

        type:String,

        required:true,

        unique:true,

        lowercase:true

    },

    password:{

        type:String,

        required:true

    },

    birthday:{

        type:String

    },

    activityArea:{

        type:String

    },

    skills:[String],

    availableHours:{

        type:Number,

        default:0

    },

    phone: {
    type: String,
    default: ""
},

address: {
    type: String,
    default: ""
},

bloodGroup: {
    type: String,
    default: ""
},

profilePic: {
    type: String,
    default:
      "https://cdn-icons-png.flaticon.com/512/149/149071.png"
},

    role:{

        type:String,

        default:"user"

    },

    createdAt:{

        type:Date,

        default:Date.now

    }

});

module.exports = mongoose.model("User",userSchema);