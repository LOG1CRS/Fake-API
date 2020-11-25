import { Schema, model } from 'mongoose';

const roleShema = new Schema(
  {
    name: String,
  },
  { versionKey: false }
);

export default model('Role', roleShema);
