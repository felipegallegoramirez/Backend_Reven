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
    reward: [{
        name: {
            type: String,
          },
        name: {
            type: String,
          },
        count: {
            type: Number,
          },
        price: {
            type: Number,
          },
    }],
    total: {
        type: Number,
      },
    state: {
        type: Number,
      },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Claims || mongoose.model("Claims", StorageScheme);