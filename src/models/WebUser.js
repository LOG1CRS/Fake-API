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
    role: {
      type: String,
      required: true,
    },
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
  receivedPassword,
  savedPassword
) => {
  return await bcrypt.compare(receivedPassword, savedPassword);
};

export default model('WebUser', webUserSchema);
