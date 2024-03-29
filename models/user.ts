import { Schema, models, model } from "mongoose"

const userSchema = new Schema(
  {
    name: { type: String, required: [true, "Name is required"] },
    password: { type: String },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: [true, "Email is already exists!"],
    },
    provider: { type: String },
  },
  { timestamps: true }
)

const User = models?.User || model("User", userSchema)

export default User
