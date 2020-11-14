import { Schema, model } from 'mongoose';
import Post from './Post';

const UserSchema = new Schema(
  {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    age: {
      type: Number,
    },
    birthday: {
      type: String,
    },
    gender: {
      type: String,
    },
    email: {
      type: String,
    },
    cellphone: {
      type: String,
    },
    imageProfile: {
      type: String,
    },
    ownerEmail: {
      type: String,
    },
    friends: { type: [String] },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
  },
  { timestamps: true }
);

export default model('Users', UserSchema);
