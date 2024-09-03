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
    reward_id: {
        type: String,
      },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Event || mongoose.model("Event", StorageScheme);