const { Schema, model } = require('mongoose');
const Post = require('./Post');

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
      type: Date,
    },
    gender: {
      type: String,
    },
    emil: {
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
        ref: 'Post',
      },
    ],
  },
  { timestamps: true }
);

module.exports = model('Users', UserSchema);
