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
    data: [{
        type: {
            type: String,
          },
        options: [{
            type: String,
          }],
        answer: {
            type: Number,
          },
    }],
    points: {
        type: Number,
      },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Claims || mongoose.model("Claims", StorageScheme);