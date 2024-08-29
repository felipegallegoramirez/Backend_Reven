const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    name: {
      type: String,
      
    },
    email: {
      type: String,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      
    },
    rol: {
      type: String,
      
    },
    files_id: [{
      type: String,
      
    }],
    post_id: [{
      type: String,
      
    }],
    bloq:[{
      day:[{
        type: Number,
        
      }]
    }],
    services:[{
      type: String,
      
    }],
    booking:[{
      type: String,
      
    }],
    code: {
      type: String,
      
    },
    active: {
      type: Boolean,
      
    },
    description: {
      type: String,
      
    },
    category: {
      type: String,
      
    },
    locate: {
      type: String,
      
    },
    link: {
      type: String,
      
    },
    followers:[{
      type: String,
      
    }],
    follows:[{
      id: {
        type: String,
        
      },
      name: {
        type: String,
        
      }
    }],
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Users || mongoose.model("Users", StorageScheme);