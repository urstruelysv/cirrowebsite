import mongoose from "mongoose";

const distributorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minLength: [5, "Name must be at least 5 characters long"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    match: [/\S+@\S+\.\S+/, "Email is invalid"],
  },
  mobile: {
    type: String,
    required: [true, "Mobile number is required"],
    match: [/^\d{10}$/, "Mobile number must be 10 digits"],
  },
  pincode: {
    type: String,
    required: [true, "Pincode is required"],
    match: [/^\d{6}$/, "Pincode must be 6 digits"],
  },
  city: {
    type: String,
    required: [true, "City is required"],
  },
  state: {
    type: String,
    required: [true, "State is required"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Distributor ||
  mongoose.model("Distributor", distributorSchema);
