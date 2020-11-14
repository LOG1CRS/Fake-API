import { model, Schema } from 'mongoose';

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

export default model('Posts', PostSchema);
