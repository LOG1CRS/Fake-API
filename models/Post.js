const { model, Schema } = require('mongoose');

const PostSchema = new Schema(
  {
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    likes: {
      type: Number,
    },
    comments: {
      type: Number,
    },
    shares: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = model('Posts', PostSchema);
