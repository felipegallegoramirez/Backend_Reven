const mongoose = require("mongoose");
//const mongoosePaginate = require("mongoose-paginate-v2");
//const mongoosePaginateAggregate = require("mongoose-aggregate-paginate-v2");
const StorageScheme = new mongoose.Schema(
  {
    answers: [{
      type: String,
    }],
    calification: {
      type: Number,
    },
    points: {
      type: Number,
    },
    state: {
      type: String,
    },
    user_id: {
        type: String,
      },
    survey_id: {
    type: String,
    },
    events_id: {
        type: String,
    },
  },


  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.models.Response || mongoose.model("Response", StorageScheme);