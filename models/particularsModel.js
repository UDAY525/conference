import mongoose from "mongoose";

const particularsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    template: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("particulars", particularsSchema);
