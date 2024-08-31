const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    name: {
        type: String,
      },
    description: {
        type: String,
      },
    img_url: {
        type: String,
      },
    users: [{
        user_id: {
            type: String,
        },
        user_name: {
            type: String,
        },
        user_email: {
            type: String,
        },
    }],
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Event || mongoose.model("Event", StorageScheme);