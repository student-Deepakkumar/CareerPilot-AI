import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      default: "Deepak Kumar",
    },

    email: {
      type: String,
      default: "deepak@example.com",
    },

    resumeScore: {
      type: Number,
      default: 0,
    },

    jobScore: {
      type: Number,
      default: 0,
    },

    interviewScore: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("User", userSchema);
