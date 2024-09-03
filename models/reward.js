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
    count: {
        type: Number,
      },
    price: {
        type: Number,
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
        points: {
          type: String,
      },
    }],
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Reward || mongoose.model("reward", StorageScheme);