import { Schema, model } from 'mongoose';
import bcrypt from 'bcryptjs';

const webUserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: [
      {
        ref: 'Role',
        type: Schema.Types.ObjectId,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

webUserSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

webUserSchema.statics.comparePassword = async (
  savedPassword,
  receivedPassword
) => {
  await bcrypt.compare(savedPassword, receivedPassword);
};

export default model('WebUser', webUserSchema);
