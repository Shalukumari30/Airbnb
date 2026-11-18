const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
  filename: {
    type: String,
    default: "listingimage",
  },
  url: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  },
},
  price: {
  type: Number,
  required: true,
  },
  location: String,
  country: String,
 reviews: [
  {
    type: Schema.Types.ObjectId,
    ref: "Review",
  },
],
});

const Listing = mongoose.model("Listings", listingSchema);
module.exports = Listing;
