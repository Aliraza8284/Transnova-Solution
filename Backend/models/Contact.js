import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    ticketId: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    submissionNumber: {
      type: Number,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      index: true,
    },

    company: {
      type: String,
      default: "Not provided",
      trim: true,
    },

    service: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    previousTicket: {
      type: String,
      default: "No previous ticket",
    },

    customerStatus: {
      type: String,
      enum: ["New Customer", "Returning Customer"],
      default: "New Customer",
    },

    status: {
      type: String,
      enum: ["Open", "In Progress", "Resolved", "Closed"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Contact", contactSchema);